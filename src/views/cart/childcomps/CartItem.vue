<template>
  <div class="cart-item">
     <div class="item-selector"> 
       <check-box @click.native="checkClick" :isChecked="isChecked"  />
       </div>
   
    <div class="item-img">
      <img :src="itemInfo.image" />
    </div>
    <div class="item-info">
      <div class="title">{{itemInfo.title}}</div>
      <div class="item-bottom">
        <div class="price left">￥{{itemInfo.price}}</div>
        <div class="counter right">x{{itemInfo.counter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from 'components/common/checkbox/CheckBox'
export default {
 computed:{
isChecked(){
  return this.itemInfo.checked 
}
 },
  
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components:{
CheckBox
  },
  methods:{
      checkClick(){
          this.itemInfo.checked =!this.itemInfo.checked 
          
      }
  }
};
</script>

<style scoped>
.cart-item {
  padding: 10px 5px;
  display: flex;
  border-bottom: 1px solid #eee;
}
 .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.cart-item img {
  width: 80px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
}
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.item-info {
  position: relative;
}
.item-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.price {
  color: red;
}
</style>
