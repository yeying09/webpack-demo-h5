<template>
  <div>
    <Cell
        :title="item.title"
        :content="item.content"
        has-arrow
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
            title: '测试标题2',
            content: '内容内容内容内容2',
            path: '/demo/cell'
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
