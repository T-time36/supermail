<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabclick=""></tab-control>
      <good-list :goods="showGoods" />

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </scroll>
  </div>
</template>

<script>
  // 轮播图
  import HomeSwiper from './childHome/HomeSwiper.vue'
  // 推荐栏
  import RecommendView from './childHome/RecommendView.vue'
  // 本周推荐
  import FeatureView from './childHome/FeatureView.vue'

  // 控制导航
  import TabControl from 'components/content/tabControl/TabControl.vue'
  // 顶部导航栏
  import NavBar from 'components/common/navbar/NavBar.vue'
  // 商品列表
  import GoodList from 'components/content/goods/GoodList.vue'

  // 网络请求方法
  import {
    getMultidata,
    getHomeGoods
  } from 'network/home.js'

  // 滚动插件
  import Scroll from 'components/common/scroll/Scroll.vue';

  export default {
    name: 'Home',
    // 注册组件
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      NavBar,
      GoodList,
      Scroll
    },
    data() {
      return {
        // 存储拿到的数据
        banners: [],
        recommends: [],
        goods: {
          // 流行
          'pop': {
            page: 0,
            list: []
          },
          // 新款
          'new': {
            page: 0,
            list: []
          },
          // 精选
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // 创建组件时就调用请求方法，拿到数据
    created() {
      // 获取轮播图和推荐栏的数据
      this.getMultidata()

      // 获取商品界面数据
      // this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')

    },
    methods: {
      // 事件监听相关的方法
      tabclick(index) {
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
      },

      // 发送请求的方法
      getMultidata() {
        getMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }

    },
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    /* 与视图同样高度 */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
