<template>
<div class="profile-content">
  <ul class="top-content">
    <li>
      <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </li>
    <li>
      <img src="~assets/img/profile/shopping.svg" alt="">
      <span>积分商城</span>
    </li>
    <li>
      <img src="~assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </li>
    <li>
      <img src="~assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </li>
    <li>
      <img src="~assets/img/profile/pointer.svg" alt="">
      <span>下载商城App</span>
    </li>
  </ul>
  <div class="bottom-content">
    <div>
      <img src="~assets/img/common/collect.svg" alt="">
      <span>设置</span>
    </div>
    <div>
      <img src="~assets/img/common/collect.svg" alt="">
      <span>更多</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "ProfileContent",
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.top-content img,
.bottom-content img{
  width: 25px;
  height: 25px;
  position:relative;
  top:7px;
  margin-right: 10px;
}

.top-content li,
.bottom-content>div{
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 14px;
}

.top-content{
  border-bottom:10px solid #f6f6f6;
}
</style>
