import {
  ADD_COUNTER,
  ADD_CART
} from "./mutations-type.js"

export const actions = {
  addToCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })

      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve("商品的数量+1!")
      }else{
        payload.count = 1
        context.commit(ADD_CART,payload)
        resolve("商品添加成功！")
      }
    })
  }
}
