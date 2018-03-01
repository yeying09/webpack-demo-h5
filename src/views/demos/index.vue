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
            title: 'NavBar',
            path: '/demo/navBar'
          },
          {
            title: 'Picker',
            path: '/demo/picker'
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
