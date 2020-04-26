<template>
    <div class="home">
        <home-nav-bar />
        <tab-control @tabClick="tabClick" class="tabControl" ref="tabControl1"
       :titles="['流行', '新款', '精选']" v-show="tabIsShow" />
        <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore">
            <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <recommend :recommend="recommend"></recommend>
            <home-feature />
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabControl2" />
           <keep-alive>
            <router-view :goods="goods[currentType].list" />
           </keep-alive>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop" />    
    </div>
</template>

<script>
    import HomeNavBar from './childComp/HomeNavBar'
    import HomeSwiper from './childComp/HomeSwiper'
    import Recommend from './childComp/Recommend'
    import HomeFeature from './childComp/HomeFeature'
    import TabControl from 'components/content/tabcontrol/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import BackTop from 'components/common/backtop/BackTop.vue'

    import Scroll from 'components/common/scroll/Scroll.vue'
    import {
        getHomeMultiData,
        getHomeData
    } from 'network/home.js'
    import {debounce} from 'common/utils.js'
    export default {
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    pop: {
                        page: 1,
                        list: []
                    },
                    new: {
                        page: 1,
                        list: []
                    },
                    sell: {
                        page: 1,
                        list: []
                    }
                },
                currentType: 'pop',
                isShowBackTop: false,
                tabOffsetTop: 0,
                tabIsShow:false,
                 scrollY:0
            }
        },
        components: {
            HomeNavBar,
            HomeSwiper,
            Recommend,
            HomeFeature,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        created() {
            this.getHomeMultiData()
            this.getHomeData('pop')
            this.getHomeData('new')
            this.getHomeData('sell')
        },
        mounted() {
            //图片加载完后刷新better-scroll的可加载高度
            const refresh = debounce(this.$refs.scroll.refresh, 500)
            this.$bus.$on('homeImageLoad',  refresh)
        },
     
        methods: {

            // 请求数据的函数
            getHomeMultiData() {
                getHomeMultiData().then(res => {
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                })
            },
            getHomeData(type) {
                const page = this.goods[type].page
                getHomeData(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1;
                    this.$refs.scroll.scroll.finishPullUp()
                })
            },
            // 事件监听方法
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
               this.$router.replace(this.currentType)
                 //让两个tab的index保持一致，两个中间点击任意一个就会联动切换了
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
                
            },
            backClick() {

                this.$refs.scroll.scrollTo(0,0)
            },
            //页面滚动监听
            contentScroll(position) {
                this.tabIsShow = (-position.y) > this.tabOffsetTop
                this.isShowBackTop = (-position.y )> 2000
            },
            loadMore() {
                this.getHomeData(this.currentType)
            },
            //l轮播图加载完成之后计算切换栏到顶部的距离
            swiperImageLoad() {
                //$el获取组件中的元素
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        

            }
        }

    }
</script>

<style scoped>
    .home {
        position: relative;
        height: 100vh;
    }

    .wrapper {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
 
    .tabControl{
        position: relative;
        z-index: 9;
    }

</style>