<template>
<div class="toast" v-show="isShow">
  {{message}}
</div>
</template>
<script>
export default {
  name: "Toast",
  props:{
    message:{
      type:String,
      default:""
    },
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    show(message,duration=1000){
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ""
      },duration)
    }
  }
}
</script>
<style scoped>
.toast{
  background-color:rgba(0,0,0,0.4);
  position:absolute;
  left: 50%;
  top:50%;
  z-index: 100000;
  width: 150px;
  height: 40px;
  transform: translate(-50%,-50%);
  border-radius: 15px;
  color:#fff;
  text-align: center;
  line-height: 40px;
}
</style>
