<template>
<div class="right-top-category">
  <div class="right-top-item"
       v-for="(item,index) in rightTopInfo"
       :key="index">
       <a :href="item.link">
         <img :src="item.image" alt="" @load="itemimg">
         <div class="item-title">{{item.title}}</div>
       </a>
  </div>
</div>
</template>
<script>
export default {
  name: "RightTopCategory",
  props:{
    rightTopInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    itemimg(){
      this.$emit("itemimg")
    }
  }
}
</script>
<style scoped>
.right-top-category{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:10px 0px;
}

.right-top-item{
  width: 60px;
  height: 80px;
}

.right-top-item img{
  width: 60px;
  text-align: center;
}

.right-top-item .item-title{
  font-size: 12px;
  text-align: center;
}
</style>
