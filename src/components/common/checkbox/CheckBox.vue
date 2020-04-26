<template>

  <div class="check-box" :class="{active:isChecked}">
   <img src="~assets/img/cart/tick.svg" >
  </div>
  
</template>

<script>
export default {

    props:{
      isChecked:{
        type:Boolean,
        default(){
          return true
        }
      }
    }
};
</script>

<style scoped>
.check-box{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #FF8198; 
   
    
}
img{
  width: 100%;
}
.active{
background-color: #FF8198;
}
</style>
