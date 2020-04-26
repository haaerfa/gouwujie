import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//解决移动端点击延迟的问题
FastClick.attach(document.body)
// 创建$bus 总线 实现非父子兄弟之间的通信
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//全局安装弹窗
Vue.use(toast)
Vue.use(VueLazyLoad)
