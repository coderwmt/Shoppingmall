<template>
<div class="home-nav-bar">
  <nav-bar class="nav-bar">
    <div class="center" slot="center">购物街</div>
  </nav-bar>
</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"

export default {
  name: "HomeNavBar",
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
}

.center{
  color:#fff;
}
</style>
