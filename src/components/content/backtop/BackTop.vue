<template>
<div class="back-top">
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>
<script>
export default {
  name: "BackTop",
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.back-top{
  position:absolute;
  z-index: 101;
  bottom:42px;
  right: 5px;
  z-index: 10000000;
}

.back-top img{
  width:45px;
  height: 45px;
}
</style>
