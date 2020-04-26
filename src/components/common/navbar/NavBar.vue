<template>
 <div class="nav-bar ">
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
}
</script>

<style scoped>
 .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    z-index: 9;
    position: relative;
    box-shadow: 0 1px 1px rgba(100,100,100,.07);
} 
.left, .right{
    width: 60px;
    text-align: center;
}
.center{
    flex:1;
    text-align: center;
} 
</style>
