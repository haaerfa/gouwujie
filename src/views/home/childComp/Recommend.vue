<template>
 <div class="recommend">
<div class="recommend-item" v-for="(item,index) in recommend" :key="index">
    <a :href="item.link"><img :src="item.image" ></a>
</div>
 </div>
</template>

<script>
export default {
props:{
    recommend:Array
}
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    padding: 10px 0;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex:1;
}
.recommend img{
    width: 90%;
}
</style>
