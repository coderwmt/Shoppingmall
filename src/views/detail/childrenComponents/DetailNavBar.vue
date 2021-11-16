<template>
<div class="detail-nav-bar">
  <nav-bar>
    <div slot="left" class="left" @click="backClick">
      <img class="back" src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titles">
      <div class="titles-item"
           v-for="(item,index) in titles"
           :key="index"
           :class="{active:currentIndex === index}"
           @click="itemClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"

export default {
  name: "DetailNavBar",
  props:{
    titles:{
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
  components: {
    NavBar
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    itemClick(index){
      this.currentIndex = index
      this.$emit("itemClick",index)
    }
  }
}
</script>
<style scoped>
.titles{
  display: flex;
  text-align: center;
  font-size: 14px;
}

.titles-item{
  flex:1;
}

.left{
  text-align: center;
}

.back{
  width: 15px;
  height: 15px;
  margin-top: 15px;
}

.active{
  color:var(--color-tint);
}
</style>
