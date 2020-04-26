<template>
 <div class="detail-params-info" v-if="Object.keys(goodsParam).length !==0">
     <div>{{goodsParam.rule.disclaimer}}</div>
  <table class="info-size">
    <tr  v-for="(item,index) in goodsParam.rule.tables[0]" :key="index">
        <td v-for="(td,index) in item" :key="index" >{{td}}</td>
    </tr>
  </table>
  <table class="info-param">
      <tr v-for="(item,index) in goodsParam.info.set" :key="index">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
      </tr>
  </table>
 </div>
</template>

<script>
export default {
 props:{
     goodsParam:{
         type:Object,
         default(){
             return {}
         }
     }
 }
}
</script>

<style scoped>
.detail-params-info{
    padding: 20px 15px;
    font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
table{
    width: 100%;
    border-collapse: collapse;
}
tr{
  height: 42px;  
    border-bottom: 1px solid rgba(100,100,100,.1);

}
.key{
    width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.value{
    color: #eb4846;
}
</style>
