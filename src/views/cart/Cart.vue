<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <div slot="center" class="title">购物车({{$store.getters.cartCount}})</div>
  </nav-bar>

  <scroll class="content">
  <cart-list></cart-list>
  </scroll>

  <cart-bottom></cart-bottom>
</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"
import Scroll from "components/common/scroll/Scroll.vue"

import CartList from "./childrenComponents/CartList.vue"
import CartBottom from "./childrenComponents/CartBottom.vue"

export default {
  name: "Cart",
  data () {
    return {
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottom,
    Scroll
  }
}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
}

.title{
  color:#fff;
}

.cart{
  height: 100vh;
  position:relative;
}

.content{
  position:absolute;
  top:44px;
  bottom:79px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
