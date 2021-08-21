import Vue from 'vue'
import App from './App.vue'
// 引入路由对象 index.js 可以省略
import router from './router'

new Vue({
  render: h => h(App),
  // 挂载路由
  router,
}).$mount('#app')
