<template>
 <div class="goods-list">
<goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
 </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
props:{
    goods:Array
},
components:{
    GoodsItem
},
}
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
