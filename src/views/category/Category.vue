<template>
<div class="category">
  <category-nav-bar></category-nav-bar>

  <scroll class="left-content">
  <left-category :left-category-info="leftCategoryInfo" @itemClick="itemClick"></left-category>
  </scroll>

  <tab-control class="tab-control" :titles="titles" v-show="isShow" ref="tabcontrol2" @itemClick="tabClick"></tab-control>

  <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>

  <scroll class="right-content" ref="scroll" @contentScroll="contentScroll" :probe-type="3">
  <right-top-category :right-top-info="rightTopInfo" @itemimg="itemimg"></right-top-category>
  <tab-control :titles="titles" class="control" ref="tabcontrol1" @itemClick="tabClick"></tab-control>
  <goods-list :goods="goodsInfo" ref="goods"></goods-list>
  </scroll>
</div>
</template>
<script>
import { getCategory,getSubCategory,getSubCategoryDetail } from "network/category.js"

import CategoryNavBar from "./childrenComponents/CategoryNavBar.vue"
import LeftCategory from "./childrenComponents/LeftCategory.vue"
import RightTopCategory from "./childrenComponents/RightTopCategory.vue"

import Scroll from "components/common/scroll/Scroll.vue"
import GoodsList from "components/content/goods/GoodsList.vue"
import TabControl from "components/content/tabcontrol/TabControl.vue"

import { backTopMixin } from "common/mixin.js"

export default {
  name: "Category",
  data () {
    return {
      leftCategoryInfo:[],
      rightTopInfo:[],
      maitKey:"3627",
      currentType:"pop",
      miniWallkey:"10062603",
      goodsInfo:[],
      titles:["流行","新款","精选"],
      isShow:false,
      tabOffsetTop:0
    }
  },
  components: {
    CategoryNavBar,
    LeftCategory,
    GoodsList,
    Scroll,
    RightTopCategory,
    TabControl
  },
  mixins: [backTopMixin],
  created () {
    this.getCategory()
    this.getSubCategory(3627)
    this.getSubCategoryDetail(this.miniWallkey,"pop")
    this.getSubCategoryDetail(this.miniWallkey,"new")
    this.getSubCategoryDetail(this.miniWallkey,"sell")
  },
  mounted () {
    this.$bus.$on("itemImageLoad",() => {
      this.$refs.scroll.refresh()
      this.tabOffsetTop = this.$refs.tabcontrol1.$el.offsetTop
    })
  },
  methods: {
    getCategory(){
      getCategory().then(res => {
        this.leftCategoryInfo = res.data.data.category.list
        // console.log(this.leftCategoryInfo)
      })
    },
    getSubCategory(maitKey){
      getSubCategory(maitKey).then(res => {
        this.rightTopInfo = res.data.data.list
        // console.log(this.rightTopInfo)
      })
    },
    getSubCategoryDetail(miniWallkey,type){
      getSubCategoryDetail(miniWallkey,type).then(res => {
        this.goodsInfo = res.data
      })
    },

    itemClick(index){
      this.maitKey = this.leftCategoryInfo[index].maitKey
      this.getSubCategory(this.maitKey)
      this.$refs.scroll.scrollTo(0,0,0)
      this.miniWallkey = this.leftCategoryInfo[index].miniWallkey
      // console.log(this.maitKey)
      this.getSubCategoryDetail(this.miniWallkey,this.currentType)
    },
    tabClick(index){
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
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
      this.getSubCategoryDetail(this.miniWallkey,this.currentType)
    },
    contentScroll(position){
      this.isShow = -position.y >= this.tabOffsetTop
      this.listenerBackTop(position)
    },
    itemimg(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>
<style scoped>
.category{
  height: 100vh;
}

.left-content{
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.right-content{
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 40%;
  right: 0;
  overflow: hidden;
}

.tab-control{
  position: relative;
  z-index: 10000;
  width: 60%;
  left: 40%;
  background-color: #fff;
  font-size: 13px;
}

.control{
  background-color: #fff;
  width: 100%;
  position:relative;
  left: 0;
  right:0;
  font-size: 13px;
}
</style>
