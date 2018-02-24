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
            title: 'Color Card',
            path: '/demo/colorCard'
          },
          {
            title: 'TabBar',
            path: '/demo/tabBar'
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
