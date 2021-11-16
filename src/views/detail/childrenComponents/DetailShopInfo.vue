<template>
<div class="shop-info">
  <div class="shop-title">
    <img :src="shop.logo" alt="" class="shop-logo">
    <span class="shop-name">{{shop.name}}</span>
  </div>
  <div class="shop-detail">
    <div class="shop-detail-item shop-left">
      <div class="shop-left-item">
        <div class="fans">{{shop.fans}}</div>
        总销量
      </div>
      <div class="shop-left-item">
        <div class="goodsCount">{{shop.goodsCount}}</div>
        宝贝
      </div>
    </div>
    <div class="shop-detail-item shop-right">
      <div class="shop-right-item" v-for="(item,index) in shop.score" :key="index">
        <span class="name">{{item.name}}</span>
        <span class="item-score" :class="{active:item.isBetter}">{{item.score}}</span>
        <span class="item-level" :class="{levelActive:item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
      </div>
    </div>
  </div>
  <div class="shop-bottom">
    <span>进店逛逛</span>
  </div>
</div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.shop-info{
  padding:20px 10px;
  border-bottom: 10px solid #f6f6f6;
}

.shop-title{
  display: flex;
  align-items: center;
}

.shop-title .shop-name{
  color:#333;
}

.shop-title img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
}

.shop-detail{
  display: flex;
  padding:18px 0px;
}

.shop-detail-item{
  flex:1;
}

.shop-left{
  display: flex;
  text-align: center;
  padding:15px 0px 0px;
}

.shop-left-item{
  flex:1;
  font-size: 13px;
}

.shop-left-item .fans,
.shop-left-item .goodsCount{
  font-size: 16px;
}

.shop-right{
  font-size: 14px;
  padding:0px 10px;
  border-left: 1px solid #e6e6e6;
}

.shop-right-item{
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.item-score{
  color:var(--color-high-text);
}

.item-level{
  background-color:var(--color-tint);
  color:#fff;
}

.shop-bottom{
  background-color: var(--color-tint);
  color:#fff;
  font-size: 14px;
  width: 88px;
  text-align: center;
  margin:0 auto;
  border-radius: 20px;
  height: 30px;
  line-height: 30px;
  /* padding:5px 10px; */
}

.active{
  color:tomato;
}

.levelActive{
  background-color:tomato;
  color:#fff;
}
</style>
