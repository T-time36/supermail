<template>
  <div class="good-list">
    <good-list-item v-for="item in goods" :goodItem="item" />
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem.vue'

  export default {
    components: {
      GoodListItem
    },
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }

</script>

<style>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>
