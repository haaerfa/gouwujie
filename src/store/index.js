import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCount(state,oldProduct){ 
      oldProduct.counter++
    },
    addToCart(state,product){
    product.checked=true
    state.cartList.push(product)
    }
  },
  actions: {
    cartClick(context,product){ 
 return new Promise((resolve,reject)=>{
  const oldProduct =context.state.cartList.find(item=>item.iid===product.iid)
  if(oldProduct){
    context.commit("addCount",oldProduct)
    resolve('添加了新商品')
  }else{
    product.counter=1
    context.commit("addToCart",product)
    resolve('商品数量加一')
  }
 })
}
  } 
 
})
