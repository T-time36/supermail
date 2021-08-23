<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
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
    data() {
      return {
        isLoad: false
      }
    },
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
    methods: {
      // isLoad 轮播图有四张图片，只要加载完一张发送一次就可以了，不必多次发送
      imageLoad() {
        if (!this.isLoad) {
          this.$emit('imageLoad')
          this.isLoad = true
        }
      }
    },
  }

</script>

<style lang="scss" scoped>

</style>
