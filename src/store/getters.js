export const getters = {
  cartCount(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  }
}
