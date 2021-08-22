<template>
  <div id="app">
    <!-- 显示路由组件 -->
    <router-view></router-view>
    <!-- 底部导航栏组件 -->
    <main-tab-bar class="tab-bar" />
  </div>
</template>

<script>
  // 引入底部导航栏组件
  import mainTabBar from 'components/content/mainTabBar/mainTabBar.vue'

  export default {
    name: 'App',
    components: {
      mainTabBar
    }
  }

</script>

<style>
  @import 'assets/css/base.css'

</style>
