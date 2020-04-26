import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载
Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const GoodsList  = ()=>import('components/content/goods/GoodsList.vue')
const Detail = ()=>import('views/detail/Detail.vue')
//安装插件

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'pop'
      },
     { path:'pop',
     component:GoodsList
    },
    { path:'new',
    component:GoodsList
   },
    { path:'sell',
   component:GoodsList
    }
    ]
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router