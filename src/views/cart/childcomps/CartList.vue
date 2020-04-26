<template>
 <div class="cart-list">
<cart-item v-for="(item,index) in cartList" :key="index" :itemInfo="item" />
 </div>
</template>

<script>
import CartItem from './CartItem'
export default {
computed:{
    cartList(){
        return this.$store.state.cartList
    }
},


 components:{
    CartItem 
 }
}
</script>

<style scoped>

</style>
