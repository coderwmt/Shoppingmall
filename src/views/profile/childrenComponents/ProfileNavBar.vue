<template>
<div class="profile-nav-bar">
  <nav-bar class="nab-bar">
    <div slot="center">超级商场</div>
  </nav-bar>
</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue"

export default {
  name: "ProfileNavBar",
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
  color:#fff;
}
</style>
