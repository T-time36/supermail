<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  // 轮播图
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper/index.js'


  export default {
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }

</script>

<style lang="scss" scoped>

</style>
