import Vue from 'vue'
import App from './App.vue'
// 引入路由对象 index.js 可以省略
import router from './router'

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  // 挂载路由
  router,
}).$mount('#app')
