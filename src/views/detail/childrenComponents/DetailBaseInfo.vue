<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span class="info-other-left">{{goods.columns[0]}}</span>
      <span class="info-other-center">{{goods.columns[1]}}</span>
      <span class="info-other-right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>

    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.base-info{
  padding:10px 15px;
  border-bottom: 10px solid #f6f6f6;
}

.base-info .info-title{
  font-size: 15px;
  color:#333;
}

.info-price{
  padding:10px 0px;
}

.info-price .n-price{
  font-size: 20px;
  color:var(--color-high-text);
  margin-right: 10px;
}

.info-price .o-price{
  font-size: 13px;
  text-decoration: line-through;
  margin-right: 10px;
}

.info-price .discount{
  font-size: 12px;
  background-color: var(--color-tint);
  color:#fff;
  padding:2px 5px;
  border-radius: 20px;
  position: relative;
  top:-5px;
}

.info-other{
  display: flex;
  font-size: 13px;
  padding:5px 0px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
}

.info-services{
  padding:10px 0px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}

.info-services-item img{
  width: 15px;
  height:15px;
  position: relative;
  top:3px;
}
</style>
