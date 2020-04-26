<template>
 <div class="category">
    <cate-nav-bar />
    <div class="cate-content">
      <cate-menu class="menu left" :menu="menu" @menuClick='menuClick' />
      <cate-content :subcategory="subcategory" class="content right"/>
   </div> 
 </div>
</template>

<script>
import CateNavBar from './childcomps/CateNavBar'
import CateMenu from './childcomps/CateMenu'
import CateContent from './childcomps/CateContent'



import {getCategory,getSubCategory} from 'network/category'
export default {
    data(){
      return{
        menu:[],
        subcategories:[],
        subcategory:[]
      }
    },
    components:{
        CateNavBar,
        CateMenu,
        CateContent,
    },
beforeCreate(){
  //请求菜单数据
   getCategory().then(res=>{
       this.menu =res.data.category.list   
       //请求每个分类对应的数据
       this.menu.forEach((value,index)=>{      
     getSubCategory(value.maitKey).then(res=>{    
       this.subcategories[index] = res.data.list
       //设置分页内容初始值
       this.subcategory=this.subcategories[0]
       
     })
   })        
   })

   },
 
   methods:{
   menuClick(index){
     
    this.subcategory = this.subcategories[index]   
   
}
   }
}


</script>

<style scoped>


</style>
