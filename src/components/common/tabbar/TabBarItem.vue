<template>
 <div class="tabbar-item " @click="pathClick">
<div class="icon" v-show="!isActive"><slot name="icon"></slot></div>
<div class="active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
<div class="text" :style="activeStyle"><slot name="text"></slot></div>
 </div>
</template>

<script>
export default {
    props:{
        path:{
            type:String,
            required:true
        }
    },
 computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
          return this.isActive?{'color':'#FF5777'}:{}
      },
      },
methods:{
    
    pathClick(){
        this.$router.replace(this.path)
    }
}
}
</script>

<style scoped>
.tabbar-item{
    flex:1;
    font-size: 12px;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
}
</style>