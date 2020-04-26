<template>
 <div >
<nav-bar class="home-nav-bar">
    <div slot="center" class="home-nav-center">购物街</div>
</nav-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
components:{
    NavBar
}
}
</script>

<style scoped>
.home-nav-bar{
    background-color:#ff8198;
    color:#fff;
    letter-spacing: 1em;
    font-size:16px;

}

</style>
