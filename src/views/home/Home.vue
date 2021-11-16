<template>
<div class="home">
  <!-- 获取的是首页导航栏 -->
  <home-nav-bar></home-nav-bar>

  <tab-control :titles="titles"
               @itemClick="itemClick"
              ref="tabControl1"
              class="tab-control"
              v-show="isShow"></tab-control>

  <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>

  <scroll class="content"
          :pull-up-load="true"
          @pullUpLoad="loadMore"
          ref="scroll"
          :probe-type="3"
          @contentScroll="contentScroll">
  <!-- 展示的是轮播图 -->
  <home-swiper :banners="banners" @itemImage="itemImage"></home-swiper>
  <!-- 展示的推荐部分 -->
  <home-recommends :recommends="recommends"></home-recommends>
  <!-- 展示特色部分 -->
  <home-feature></home-feature>
  <!-- 控制栏部分 -->
  <tab-control :titles="titles" @itemClick="itemClick" ref="tabControl2"></tab-control>

  <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>

</div>
</template>
<script>
import HomeNavBar from "./childrenComponents/HomeNavBar.vue"
import HomeSwiper from "./childrenComponents/HomeSwiper.vue"
import HomeRecommends from "./childrenComponents/HomeRecommends.vue"
import HomeFeature from "./childrenComponents/HomeFeature.vue"

import { getHomeMultidata,getHomeGoods } from "network/home.js"

import Scroll from "components/common/scroll/Scroll.vue"
import TabControl from "components/content/tabcontrol/TabControl.vue"
import GoodsList from "components/content/goods/GoodsList.vue"

import { backTopMixin } from "common/mixin.js"

export default {
name: "Home",
  data () {
    return {
      banners:[],
      recommends:[],
      titles:["流行","新款","精选"],
      goods:{
        "pop":{page:1,list:[]},
        "new":{page:1,list:[]},
        "sell":{page:1,list:[]}
      },
      currentType:"pop",
      tabOffsetTop:0,
      isShow:false,
      saveY:0
    }
  },
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  created () {
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  mounted () {
    // const refresh = debounce(this.$refs.scroll.refresh,500)
    // this.$bus.$on("itemImageLoad",() => {
    //   refresh()
    // })
    this.$bus.$on("itemImageLoad",() => {
      this.$refs.scroll.refresh()
    })
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getSaveY()
    this.$bus.$off("itemImageLoad",() => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        //1.获取轮播图图片
        this.banners = res.data.data.banner.list
        //2.获取推荐的图片
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      let page = this.goods[type].page
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page = this.goods[type].page + 1
        this.$refs.scroll.finishPullUp()
      })
    },

    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    itemClick(index){
      switch(index){
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    itemImage(){
      this.$refs.scroll.refresh()
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    contentScroll(position){
      this.listenerBackTop(position)
      this.isShow = -position.y >= this.tabOffsetTop
    },
  }
}
</script>
<style scoped>
.home{
  height: 100vh;
}

.content{
  overflow: hidden;
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control{
  position:relative;
  z-index: 100;
  background: #fff;
}
</style>
