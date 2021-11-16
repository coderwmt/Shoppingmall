<template>
  <div class="cart-bottom">
    <div class="left">
      <check-button class="check-button" :is-check="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="calc">合计:{{ totalPrice }}</div>
    <div class="by-button" @click="calcClick">去计算({{ checkedLength }})</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottom",
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.count * item.price;
          }, 0)
          .toFixed(2) + "(元)"
      );
    },
    checkedLength() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      //every方法是检测数组中是否都满足条件，若都满足则返回true，若是有其中一项不满足，则返回false
      return this.cartList.every(function (item) {
        return item.checked;
      });
    },
    isCheckedAll(){
      return this.cartList.filter(item => {
        return item.checked
      }).length
    }
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        // this.cartList.forEach(item => item.checked=false)
        for(let item of this.cartList){
          item.checked = false
        }
      }else{
        // this.cartList.forEach(item => item.checked=true)
        for(let item of this.cartList){
          item.checked = true
        }
      }
    },
    calcClick(){
      if(this.isCheckedAll === 0){
        this.$toast.show("选择购买的商品！",1000)
      }
    }
  }
};
</script>
<style scoped>
.cart-bottom {
  height: 30px;
  line-height: 30px;
  background-color: #f6f6f6;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  padding-left: 10px;
  font-size: 14px;
}

.left {
  display: flex;
  align-items: center;
}

.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.left,
.by-button {
  width: 80px;
}

.calc {
  flex: 1;
  padding-left: 10px;
}

.by-button {
  color: #fff;
  background-color: var(--color-tint);
  text-align: center;
}
</style>
