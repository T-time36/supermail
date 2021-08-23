<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabControl1" class="tabControl" v-show="isFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="currentScroll" @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabControl2">
      </tab-control>
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
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
  // 滚动插件
  import Scroll from 'components/common/scroll/Scroll.vue'
  // 回到顶部按键
  import BackTop from 'components/content/backTop/BackTop.vue';


  // 网络请求方法
  import {
    getMultidata,
    getHomeGoods
  } from 'network/home.js'

  // 防抖动函数
  import {
    debounce
  } from 'common/utils.js'

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
      Scroll,
      BackTop,
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
        currentType: 'pop',
        isShow: false,
        isFixed: false,
        tabOffsetTop: 0,
        scrollY: 0
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
    mounted() {
      // 接收商品图片加载完成的信息
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.scrollY, 1)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.scrollY = this.$refs.scroll.scroll.y
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      currentScroll(position) {
        // 当滚动超过一定距离，回到顶部显示出来
        this.isShow = -position.y > 300

        // 显示tabControl
        this.isFixed = -position.y > this.tabOffsetTop
      },
      loadMore() {
        // console.log('上拉加载更多')
        // this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
        // 再次拉取，可以再次调用拉取事件
        this.$refs.scroll.finishPullUp
      }

    },
  }

</script>

<style scoped>
  #home {
    /* 与视图同样高度 */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

  .tabControl {
    position: relative;
    z-index: 9;
  }

</style>
