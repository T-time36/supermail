<template>
  <div class="nav-bar">
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="left">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  .nav-bar {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px rgb(100, 100, 100, .1);
  }

  .right,
  .left {
    width: 60px;
  }

  .center {
    flex: 1;
  }

</style>
