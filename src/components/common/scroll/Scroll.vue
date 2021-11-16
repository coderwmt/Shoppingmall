<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>
<script>
import BScroll from "better-scroll"

export default {
  name: "Scroll",
  props: {
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    probeType:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType
    })

    this.scroll.on("pullingUp",() => {
      this.$emit("pullUpLoad")
    })

    this.scroll.on("scroll",(position) => {
      this.$emit("contentScroll",position)
    })
  },
  methods: {
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    getSaveY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>
<style scoped>
</style>
