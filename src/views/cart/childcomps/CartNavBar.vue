<template>
 <div class="cart-nav-bar">
  <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
computed:{
    cartLength(){
        return this.$store.state.cartList.length
    }
},
  components:{
      NavBar
  }
 }

</script>

<style scoped>
.cart-nav-bar{
    background-color: var( --color-tint);
    color:#fff

}
</style>
