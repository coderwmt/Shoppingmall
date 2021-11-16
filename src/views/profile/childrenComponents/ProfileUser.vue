<template>
<div class="profile-user">
  <div class="user-image">
    <img src="~assets/img/profile/avatar.svg" alt="">
  </div>
  <div class="user-log">
    <div class="log">登录/注册</div>
    <div class="phone">
      <img src="~assets/img/profile/phone.svg" alt="">
      <span>暂无绑定手机号</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "ProfileUser",
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.profile-user{
  width: 100%;
  height: 150px;
  background-image: linear-gradient(var(--color-high-text), var(--color-tint));
  display: flex;
  align-items: center;
  border-bottom: 10px solid #f6f6f6;
}

.user-image{
  margin-left: 10px;
  border-radius: 50%;
  border:var(--color-high-text);
}

.user-image img{
  width: 80px;
  height: 80px;
}

.user-log img{
  width: 25px;
  height: 28px;
}

.user-log{
  color:#fff;
  font-size: 13px;
}

.phone{
  display: flex;
  align-items: center;
}

.log{
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 2px;
}
</style>
