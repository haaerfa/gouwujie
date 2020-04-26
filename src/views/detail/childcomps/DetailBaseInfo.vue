<template>
 <div class="base-info" v-if="Object.keys(goods).length!==0">
<div class="goods-title">{{goods.title}}</div>
<div class="goods-price">
    <span class="now-price">{{'￥'+goods.nowPrice}}</span>
    <span class="old-price">{{goods.oldPrice}}</span>
    <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
</div>
 <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key=index>
            <img :src="goods.services[index-1].icon" >
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
 </div>
</template>

<script>
export default {
props:{
    goods:{
type:Object,
default(){
    return {}
}
    }
}

}
</script>

<style scoped>
.base-info{
    margin-top: 7px;
    padding: 8px;
    color: #888;
  border-bottom: 5px solid #f2f5f8;
}
.goods-title{
    color:#222;
    font-size: 15px;
}
.goods-price{
    margin: 10px 0;
}
.goods-price .now-price{
     font-size: 20px;
  color: var(--color-high-text);
}
.goods-price .old-price{
    margin-left: 8px;
    font-size:13px;
    text-decoration: line-through;
}
.discount{
    position:relative;
    top:-12px;
    padding: 4px;
    color: #fff;
    font-size: 13px;
    background-color: var(--color-high-text);
    border-radius: 8px;
     margin-left: 5px;
}
.info-other{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    line-height: 30px;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}
 .info-service{
     display:flex;
     justify-content: space-between;
     line-height: 60px;
    font-size: 13px;
    color: #333;
 } 
 .info-service img{
     width:14px;
     height: 14px;
     margin-right: 2px;
 }
 
</style>
