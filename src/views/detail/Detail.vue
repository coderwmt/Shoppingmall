<template>
<div class="detail">
  <detail-nav-bar :titles="titles" @itemClick="itemClick" ref="nav"></detail-nav-bar>

  <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>

  <scroll class="content" ref="scroll" @contentScroll="contentScroll" :probe-type="3">
  <detail-swiper :topImages="topImages"></detail-swiper>

  <detail-base-info :goods="goods"></detail-base-info>

  <detail-shop-info :shop="shop"></detail-shop-info>

  <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>

  <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>

  <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>

  <goods-list :goods="recommends" ref="goods"></goods-list>
  </scroll>

  <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>
</div>
</template>
<script>
import DetailNavBar from "./childrenComponents/DetailNavBar.vue"
import DetailSwiper from "./childrenComponents/DetailSwiper.vue"
import DetailBaseInfo from "./childrenComponents/DetailBaseInfo.vue"
import DetailShopInfo from "./childrenComponents/DetailShopInfo.vue"
import DetailGoodsInfo from "./childrenComponents/DetailGoodsInfo.vue"
import DetailParamInfo from "./childrenComponents/DetailParamInfo.vue"
import DetailCommentInfo from "./childrenComponents/DetailCommentInfo.vue"
import DetailBottomBar from "./childrenComponents/DetailBottomBar.vue"

import GoodsList from "components/content/goods/GoodsList.vue"
import Scroll from "components/common/scroll/Scroll.vue"

import { getDetail,Goods,Shop,GoodsParam,getRecommend } from "network/detail.js"

import { backTopMixin } from "common/mixin.js"

export default {
  name: "Detail",
  data () {
    return {
      iid:null,
      titles:["商品","参数","评论","推荐"],
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
    }
  },
  mixins: [backTopMixin],
  created () {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.data.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })

    getRecommend().then(res => {
      this.recommends = res.data.data.list
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log("图片加载完成")
      // console.log(this.themeTopYs)
    },
    itemClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
    },
    contentScroll(position){
      let positionY = -position.y
      const length = this.themeTopYs.length
      for(let i=0;i<length-1;i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
          // console.log(i)
        }
      }

      this.listenerBackTop(position)
    },
    cartClick(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.$store.dispatch("addToCart",product).then(res => {
        this.$toast.show(res,1000)
      })
    }
  }
}
</script>
<style scoped>
.detail{
  height: 100vh;
}

.content{
  position:absolute;
  top:44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 1000;
  background-color: #fff;
}
</style>
