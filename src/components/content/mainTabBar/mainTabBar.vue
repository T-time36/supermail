<template>
  <div>
    <tab-bar>
      <!-- path 传递需要的路由路径 -->
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar">
        <img slot="item-icon" src="~assets/images/tabbar/shopcar.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcar_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  // 引入组件
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    // 注册组件
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style>
</style>
