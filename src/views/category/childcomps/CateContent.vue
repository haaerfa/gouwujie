<template>
 <scroll class="wrapper" ref="scroll" > 
 <div class="cate-item " >    
 <a class="item" 
 v-for="(item,index) in subcategory"
 :key = "index"
 :href="item.link">
<img :src="item.image" @load="imgLoad">
<div class="item-title">{{item.title}}</div>
 </a>
 </div>
 </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
props:{
    subcategory:{
        type:Array,
        default(){
            return []
        }
    }
},

 components:{
  Scroll
 },
 methods:{
     imgLoad(){
    this.$refs.scroll.refresh()
     }
 }
}
</script>

<style scoped>
.cate-item{
    width: calc(100vw - 100px);
    display: flex;
    flex-wrap: wrap;
}
.item{
width:33.33%;
text-align: center;
font-size: 14px;
}
.item img{
    width: 80%;
    margin :20px 0
}
.wrapper{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
