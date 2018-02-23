<template>
  <div>
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
            content: '',
            path: '/demo/cell'
          },
          {
            title: 'TopBar',
            content: '',
            path: '/demo/topBar'
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
