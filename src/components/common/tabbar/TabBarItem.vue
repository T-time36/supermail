<template>
  <div id="tab-bar-item" @click="itemClick">
    <!-- 插槽 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      // 获取被点击请求的路由组件路径
      path: String
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        // 等于 -1 表示this.$route.path 和 this.path相同，说明当前活跃的路由就是点击的路由
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        // 动态获取点击的需要跳转到的路由
        this.$router.replace(this.path)
      }
    }
  }

</script>


<style>
  #tab-bar-item {
    flex: 1;
    text-align: center;
    /* 一般都是 49 */
    height: 49px;
  }

  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active {
    color: #f00;
  }

</style>
