<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="user-info">
      <div class="user-title">
        <img :src="commentInfo.user.avatar" alt="" />
      </div>
      <div class="user-name">{{ commentInfo.user.uname }}</div>
    </div>
    <div class="comment-content">{{ commentInfo.content }}</div>
    <div>
      <span class="time">{{ commentInfo.created | showDate}}</span>
      <span class="style">{{ commentInfo.style }}</span>
    </div>
    <span
      class="comment-img"
      v-for="(item, index) in commentInfo.images"
      :key="index"
    >
      <img :src="item" alt="" />
    </span>
  </div>
</template>
<script>
import { formatDate } from "common/utils.js"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    showDate(value){
      const date = new Date(value * 1000)
      return formatDate(date,"yyyy-MM-dd hh:mm:ss")
    }
  }
};
</script>
<style scoped>
.comment-info {
  padding: 20px 10px;
  border-bottom: 10px solid #f6f6f6;
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #f6f6f6;
}

.user-name {
  color: #333;
  font-size: 14px;
}

.user-title img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid var(--color-high-text);
  margin-right: 10px;
}

.comment-content {
  padding: 10px 5px;
  font-size: 13px;
}

.time {
  margin-right: 15px;
  padding: 0px 3px;
}

.time,
.style {
  font-size: 12px;
  color: var(--color-high-text);
}

.comment-img img {
  margin-top: 10px;
  width: 25%;
  margin-right: 5px;
}
</style>
