<template>
<div class="profile">
  <profile-nav-bar></profile-nav-bar>
  <profile-user></profile-user>
  <profile-content></profile-content>
</div>
</template>
<script>
import ProfileNavBar from "./childrenComponents/ProfileNavBar.vue"
import ProfileUser from "./childrenComponents/ProfileUser.vue"
import ProfileContent from "./childrenComponents/ProfileContent.vue"

export default {
  name: "Profile",
  data () {
    return {
    }
  },
  components: {
    ProfileNavBar,
    ProfileUser,
    ProfileContent
  }
}
</script>
<style scoped>
</style>
