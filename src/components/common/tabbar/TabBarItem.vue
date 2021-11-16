<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="active-item-icon"></slot></div>
    <div :style="getStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
      default:""
    },
    color:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {
    };
  },
  methods: {
    itemClick(){
      if(this.$route.path !== this.path){
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    getStyle(){
      return this.isActive ? {color:this.color} : {}
    }
  }
};
</script>
<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  line-height: 1;
  margin-top: 3px;
  font-size: 13px;
  color:#333;
}

.tab-bar-item img{
  width:25px;
  height: 25px;
  margin-bottom: 4px;
}
</style>
