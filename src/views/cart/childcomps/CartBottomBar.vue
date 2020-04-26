<template>
 <div class="bottom-bar">
<div class="check-button left" >
   <check-box class="left" :isChecked="isAll" @click.native="allClick" /> 多选
</div>
<div class="total-price left">
合计:￥{{totalPrice}}
 </div>
 <div class="calcuate right" @click='calcuateClick'>去结算{{checkLength}}</div>
 </div>

</template>

<script>
import CheckBox from 'components/common/checkbox/CheckBox'

export default {
computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=>item.checked)
      .reduce(((pre,item)=>pre+item.price*item.counter),0).toFixed(2)
       
    },
    checkLength(){
return  this.$store.state.cartList.filter(item=>item.checked).length
    },
    isAll(){
        if(this.$store.state.cartList.length===0){
            return false
        }
        return !this.$store.state.cartList.find(item=>!item.checked)
    }
},
methods:{
allClick(){
    if(this.isAll){
        //全选按钮选中状态下点击所有按钮为false
        this.$store.state.cartList.forEach(item=>{item.checked=false})
    }else{
        this.$store.state.cartList.forEach(item=>{item.checked=true})
    }

    // this.$store.state.cartList.forEach(item=>{item.checked = !this.isAll});
},
calcuateClick(){
    if(!this.checkLength){
        
        this.$toast.show('请选择商品')
    }
}
},
 components:{
     CheckBox
 }
}
</script>

<style scoped>
.bottom-bar{
    width: 100%;
    height: 40px;
    background-color:#eee;
    box-shadow: 0 -2px 3px rgba(100,100,100,.1);
    

}
.check-button{
    display: flex;
    height: 40px;
    margin:0 30px 0 10px;
    align-items:center;
  
}

.total-price{
    line-height: 40px;
}
.calcuate{
width: 90px;
height: 100%;
background-color: red;
text-align: center;
line-height: 44px;
color: #fff;
}

</style>
