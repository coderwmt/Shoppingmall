<template>
<div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
  <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imageLoad">
    </div>
</div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      counter:1
    }
  },
  methods: {
    imageLoad() {
      this.counter = this.counter + 1
      if(this.counter === this.imagesLength){
        this.$emit("imageLoad")
      }
      // this.$emit("imageLoad")
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
.detail-info{
    border-bottom: 10px solid #f6f6f6;
    padding:10px 5px;
}

.info-desc{
  padding:20px;
  font-size: 14px;
}

.info-desc .start{
  height: 3px;
  width: 50%;
  background-color: var(--color-tint);
  margin-bottom: 20px;
  position:relative;
}

.info-desc .start::before{
  content: " ";
  position:absolute;
  border-top: tomato 10px solid;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  top:3px;
}

.info-desc .end{
  height: 3px;
  width: 50%;
  background-color: var(--color-tint);
  margin-top: 20px;
  float: right;
  position: relative;
}

.info-desc .end::after{
  content: " ";
  position:absolute;
  border-bottom: tomato 10px solid;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  right: 0px;
  bottom: 3px;
}

.info-list img{
  width: 100%;
  border-radius: 10px;
}

.info-key{
  padding:0px 20px 10px;
  color:#333;
}
</style>
