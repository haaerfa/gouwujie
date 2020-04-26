<template>
 <div class="detail">
<detail-nav-bar @itemClick="itemClick" ref="detailNav" />
<scroll class="wrapper" ref="scroll" @scroll="contentScroll" :probe-type="3">
<detail-swiper :topImg="topImg" />
<detail-base-info  :goods="goods" />
<detail-shop-info :shop="shop" />
<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
<detail-params-info ref="param" :goods-param=goodsParam />
<detail-comment ref="comment" :comment="comment" />
<goods-list ref="recommend" :goods="recommend" />
</scroll>
<back-top @click.native="backClick" v-show="isShowBackTop"  />    
<detail-bottom-bar @cartClick="cartClick"/>

 </div>
</template>

<script>
    //引入子组件
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import detailParamsInfo from './childcomps/detailParamsInfo'
import detailComment from './childcomps/detailComment'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childcomps/DetailBottomBar'
import BackTop from 'components/common/backtop/BackTop'

import Scroll from 'components/common/scroll/Scroll.vue'
//引入网络请求方法
import{getDetail, Goods,ShopInfo,getRecommend} from 'network/detail'
import {debounce} from 'common/utils.js'
export default {
    name:'Detail',
 data() {
  return {
  iid:null,
  topImg:[],
  goods:{},
  shop:{},
  detailInfo:{},
  goodsParam:{},
  comment:{},
  recommend:[],
  offsets:[],
  clickDebounce:null,
  currentIndex:0,
  isShowBackTop:false
  } },
created(){
    this.iid=this.$route.params.iid  
    //请求详情页数据
    getDetail(this.iid).then(res=>{
        const data =res.result
        //轮播图数据
        this.topImg = data.itemInfo.topImages  
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //店铺数据
        this.shop = new ShopInfo(data.shopInfo)
        //详情照片
        this.detailInfo = data.detailInfo
        //商品参数
        this.goodsParam = data.itemParams
       //评论不为空的话取出评论信息
       if(data.rate.cRate !==0){
           this.comment = data.rate.list[0]
       }                
    })
    //请求商品推荐数据
    getRecommend().then(res=>{
      this.recommend = res.data.list    
      
    }),
    //把获取组件的offsetTop的方法放在防抖函数里面
    this.clickDebounce = debounce(()=>{
    this.offsets=[0]
    this.offsets.push(this.$refs.param.$el.offsetTop)
    this.offsets.push(this.$refs.comment.$el.offsetTop)
    this.offsets.push(this.$refs.recommend.$el.offsetTop)
  
    })
},
components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    detailParamsInfo,
    detailComment,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Scroll
    
},
methods: {

    imageLoad(){
        //详情加载完刷新scroll 高度
        this.$refs.scroll.refresh()
        //图片加载完之后获取各个板块的offsetTop
        this.clickDebounce()
    },
  itemClick(index){   
      //点击tab栏到达相应的板块  
    this.$refs.scroll.scrollTo(0,-this.offsets[index],300)
  },
 contentScroll(position){
    const y=-position.y   
     if(y<this.offsets[1]){
         this.currentIndex =0
     }else if(y<=this.offsets[2]){
         this.currentIndex =1
     }else if(y<=this.offsets[3]){
         this.currentIndex =2
     }else{
        this.currentIndex =3
     }
     this.$refs.detailNav.currentIndex = this.currentIndex
     this.isShowBackTop = (-position.y )> 2000
 },
 backClick() {
this.$refs.scroll.scrollTo(0,0)
},
cartClick(){
    const product={}
    product.iid=this.iid
    product.image=this.topImg[0]
    product.title=this.goods.title
    product.desc=this.goods.desc
    product.price=this.goods.nowPrice
    this.$store.dispatch("cartClick",product).then(res=>{    
        this.$toast.show(res)
    })
}
},
mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('detailImageLoad',refresh)
},
}
</script>

<style scoped>
.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.wrapper{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
}

</style>
