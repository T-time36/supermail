import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载路由组件
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcar = () => import('views/shopcar/Shopcar.vue')
const Profile = () => import('views/profile/Profile.vue')

// 安装路由
Vue.use(VueRouter)

// 配置路由
const routes = [
  // 默认路由
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/shopcar',
    component: Shopcar
  }, {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


// 导出路由对象
export default router
