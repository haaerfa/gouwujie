<template>
 <div id="tabbar" >
<slot></slot>
 </div>
</template>

<script>
export default {


}
</script>

<style scoped>
 #tabbar{
     position: fixed;
     height: 49px;
     bottom: 0;
     left: 0;
     right: 0;
     display: flex;
     text-align: center;
     background-color: #f6f6f6;
     border:1px solid #eee;
     box-shadow: 0 -1px 1px rgba(100,100,100,.1);
 }
</style>
