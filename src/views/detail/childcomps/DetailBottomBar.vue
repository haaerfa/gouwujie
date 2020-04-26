<template>
 <div class="bottom-bar">
<div class="left">
    <div> <span class="service"></span> 客服</div>
    <div><span class="shop"></span>店铺</div>
    <div><span></span>收藏</div>
</div>
<div class="right">
    <div class="cart" @click="cartClick" >加入购物车</div>
    <div class="buy">购买</div>
</div>
 </div>
</template>

<script>
export default {
 methods:{
cartClick(){
    this.$emit("cartClick")
}
 }
 
}
</script>

<style scoped>
.bottom-bar{
    display: flex;
    width: 100%;
    height: 49px;
    position: fixed;
    bottom:0;
    background-color:#fff;
}
.left{
    display: flex ;
    flex: 1;
    font-size: 13px;
}
.left >div{
    flex: 1;
    text-align: center;
}
.left span{ 
 display: block; 
  width: 22px;
  height: 22px;
  margin: 5px auto;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left .service{
background-position: 0 -53px;
}
.left .shop{
background-position: 0 -97px;
}
.right{
    display: flex;
    flex:1
}
.right div{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
}
.right .cart{
  background-color: #ffe817;
  color: #333;  
}
.right .buy{
  background-color: #f69;
  color: #fff;
}
</style>
