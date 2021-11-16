<template>
<div class="left-category">
  <div class="left-category-item"
       v-for="(item,index) in leftCategoryInfo"
       :key="index"
       :class="{active:currentIndex === index}"
       @click="itemClick(index)">{{item.title}}</div>
</div>
</template>
<script>
export default {
  name: "LeftCategory",
  props:{
    leftCategoryInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("itemClick",index)
    }
  }
}
</script>
<style scoped>
.left-category{
  width:40%;
  background-color: #f6f6f6;
  font-size: 14px;
}

.left-category-item{
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
}

.active{
  background-color: #fff;
  color:var(--color-high-text);
  border-left: 3px solid var(--color-tint);
}
</style>
