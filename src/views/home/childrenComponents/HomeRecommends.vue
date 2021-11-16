<template>
  <div class="home-recommends">
    <div
      class="home-recommends-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.home-recommends{
  display: flex;
  padding:15px 0px;
  justify-content: space-evenly;
  text-align: center;
}

.home-recommends-item{
  flex: 1;
}

.home-recommends-item img{
  width: 65px;
  height: 65px;
}
</style>
