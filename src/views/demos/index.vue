<template>
  <div>
    <TopBar class="b-b-1"></TopBar>
    <Cell
        :title="item.title"
        :content="item.content"
        is-link
        v-for="(item, index) in components"
        :key="index"
        :to="{ path: item.path }">
    </Cell>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        components: [
          {
            title: 'Cell',
            path: '/demo/cell'
          },
          {
            title: 'TopBar',
            path: '/demo/topBar'
          },
          {
            title: 'Helper',
            path: '/demo/helper'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
