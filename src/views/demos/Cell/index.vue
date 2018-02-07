<template lang="html">
  <div>
    <Cell
        :title="item.title"
        :content="item.content"
        :has-arrow="true"
        v-for="(item, index) in cellArray"
        :key="index">
      <img :src="item.logo" alt="logo" slot="headIcon" class="head-icon" v-if="item.logo">
    </Cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cellArray: [
        {
          title: '测试标题1',
          content: '内容内容内容内容1',
          logo: require('@/assets/logo.png')
        },
        {
          title: '测试标题2',
          content: '内容内容内容内容2'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.head-icon {
  width: 35px;
  height: 35px;
}

.tail-icon {
  height: 35px;
}
</style>
