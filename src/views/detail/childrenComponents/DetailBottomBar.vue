<template>
<div class="detail-bottom-bar">
  <div class="bar-item bar-left">
    <div class="bar-left-item">
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div class="bar-left-item">
      <i class="icon shop"></i>
      <span class="text">店铺</span>
    </div>
    <div class="bar-left-item">
      <i class="icon select"></i>
      <span class="text">收藏</span>
    </div>
  </div>
  <div class="bar-item bar-right">
    <div class="bar-right-item cart" @click="cartClick">加入购物车</div>
    <div class="bar-right-item buy">购买</div>
  </div>
</div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  data () {
    return {
    }
  },
  methods: {
    cartClick(){
      this.$emit("cartClick")
    }
  }
}
</script>
<style scoped>
.detail-bottom-bar{
  position:fixed;
  bottom:0;
  left: 0;
  right: 0;
  height: 49px;
  line-height: 49px;
  text-align: center;
  display: flex;
  width: 100%;
  background-color: #fff;
  z-index: 10000;
  box-shadow: 0px -2px 2px rgba(0,0,0,0.05);
}

.detail-bottom-bar .bar-item{
  flex:1;
}

.bar-left{
  display: flex;
  line-height: 1;
}

.bar-left-item{
  flex:1;
}

.bar-right{
  display: flex;
}

.bar-right-item{
  flex:1;
}

.cart{
  background-color:var(--color-tint);
  color:#fff;
  font-size: 15px;
}

.buy{
  background-color: rosybrown;
  color:#fff;
}

.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin:6px auto 3px;
  background:url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service{
  background-position: 0 -52px;
}

.bar-left .shop{
  background-position: 0 -98px;
}

.bar-left span{
  font-size: 13px;
}
</style>
