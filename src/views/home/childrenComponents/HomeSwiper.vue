<template>
<swiper>
  <swiper-item v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
      <img :src="item.image" alt="" @load="itemImage">
    </a>
  </swiper-item>
</swiper>
</template>
<script>
import { Swiper,SwiperItem } from "components/common/swiper/index.js"

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isLoad:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    itemImage(){
      if(!this.isLoad){
        this.$emit("itemImage")
        this.isLoad = true
        // console.log("图片加载完成!")
      }
    }
  }
}
</script>
<style scoped>
</style>
