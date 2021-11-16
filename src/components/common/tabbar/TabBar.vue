<template>
  <div class="tab-bar">
    <tab-bar-item path="/home" color="red">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-item-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" color="red">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-item-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" color="red">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="active-item-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" color="red">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-item-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </div>
</template>
<script>
import TabBarItem from "./TabBarItem.vue"

export default {
  name: "TabBar.vue",
  data() {
    return {};
  },
  components: {
    TabBarItem
  }
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  height: 49px;
  line-height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.05);
}

</style>
