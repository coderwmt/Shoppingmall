import {
  ADD_COUNTER,
  ADD_CART
} from "./mutations-type.js"

export const mutations = {
  [ADD_COUNTER](state,payload){
    payload.count ++
  },
  [ADD_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
