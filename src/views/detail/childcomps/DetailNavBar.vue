<template>
 <div >
    <nav-bar class="detail-nav-bar">
       <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
         </div>
       <div slot="center" class="center" > 
         <span  v-for="(item,index) in titles" :key="index"
          @click="itemClick(index)" :class="{isActive:currentIndex===index}">{{item}}</span> 
       </div>
   </nav-bar>

 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
 data() {
  return {
titles:["商品","参数","评论","推荐"],
currentIndex:0
  }
 },
 components:{
    NavBar
   
 },
 methods:{
   backClick(){
      this.$router.back()
   },
   itemClick(index){
   this.currentIndex = index
   this.$emit("itemClick",index)  
   }
 }
}
</script>

<style scoped>
.detail-nav-bar{
   background-color: #fff;
}
.center{
   display: flex;
   font-size: 13px;
}
.center span{
   flex:1;
}
.back{
   padding-top:4px;
}
.isActive{
   color:var(--color-high-text);
}
</style>
