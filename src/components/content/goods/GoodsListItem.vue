<template>
<div class="goods-list-item">
  <img :src="goodsImage" alt="" @load="itemImageLoad" @click="itemClick">
  <div class="goods-info">
    <p class="title">{{goodsInfo.title}}</p>
    <span class="price">{{goodsInfo.price}}</span>
    <span class="cfav">{{goodsInfo.cfav}}</span>
  </div>
</div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    itemImageLoad(){
      this.$bus.$emit("itemImageLoad")
      // console.log("图片加载完成")
    },
    itemClick(){
      this.$router.push("/detail/"+this.goodsInfo.iid)
    }
  },
  computed: {
    goodsImage(){
      return this.goodsInfo.img || this.goodsInfo.image || this.goodsInfo.show.img
    }
  }
}
</script>
<style scoped>
.goods-list-item{
  width: 45%;
  padding-top:10px;
  position:relative;
  padding-bottom: 40px;
  text-align: center;
}

.goods-list-item img{
  width: 100%;
  border-radius: 20px;
}

.goods-info{
  font-size: 12px;
  position:absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}

.goods-info .title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-info .price{
  margin-right: 20px;
  color:var(--color-high-text)
}

.goods-info .cfav{
  position:relative;
}

.goods-info .cfav::before{
  position:absolute;
  content: "";
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
