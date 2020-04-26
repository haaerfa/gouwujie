<template>
 <div class="wrapper" ref="wrapper">
<div class="content">
    <slot> </slot>
</div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
 data() {
  return {
 scroll:null
  }
 },
 props:{
probeType:{
    type:Number,
    default:0
},
pullUpLoad:{
    type:Boolean,
    default:false
}
 },
 mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{
         //去除拉倒最顶部或者底部的弹性效果
        // bounce:false, 
        click:true,
        probeType:this.probeType,
    //设置了下拉加载就会自动实时监听probeType 的值会变成3
        pullUpLoad:this.pullUpLoad,
           mouseWheel: {    // pc端同样能滑动
            speed: 20,
            invert: false
        },
      
     }),
     
     this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)    
     }),
     this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp')
         
     })
 },
 methods:{
 refresh(){
     this.scroll && this.scroll.refresh()  
       
 },
 scrollTo(x,y,time=500){
    this.scroll && this.scroll.scrollTo(x,y,time)
 },
}
}
</script>

<style scoped>

</style>
