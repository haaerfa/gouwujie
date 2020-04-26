<template>
 <div class="cart">
<cart-nav-bar />
<scroll class="wrapper" ref="scroll">
<cart-list />
</scroll>
<cart-bottom-bar />
 </div>
</template>

<script>
import CartNavBar from './childcomps/CartNavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childcomps/CartList'
import CartBottomBar from './childcomps/CartBottomBar'
export default {

 components:{
CartNavBar,
Scroll,
CartList,
CartBottomBar

 },
 activated(){
  this.$refs.scroll.refresh()
 }
}
</script>

<style scoped>
.cart{
    height: 100vh;
}
.wrapper{
    width: 100%;
    height: calc(100% - 127px);
    overflow: hidden;
}
</style>
