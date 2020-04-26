<template>
 
 <div class="cate-menu">
  <scroll class="wrapper">  
 <div v-for="(item,index) in menu" :key=index>
     <div class="menu-item" @click="menuClick(index)" :class="{active:currentIndex===index}">
         {{item.title}}
         </div>  
 </div>
     </scroll> 
 </div>

</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    data(){
        return{
          currentIndex:0
        }
    },
props:{
    menu:{
        type:Array,
        default:[]
    }
},
components:{
    Scroll
},
methods:{
    menuClick(index){ 
    this.currentIndex = index
    this.$emit('menuClick',index)
    }
}
}
</script>

<style scoped>
.cate-menu{
    height: 100vh;
    width: 100px;
    background-color: #f6f6f6;
    box-sizing: border-box;  
}
.wrapper{
    height: calc(100% - 93px);
    overflow: hidden;
}
.menu-item{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}
.active{
    background-color: #fff;
    border-left:3px solid var(--color-high-text);
    color:var(--color-high-text);
}
</style>
