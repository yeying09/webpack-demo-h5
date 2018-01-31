<template>
  <div class="dis-flex flex-cross-center cell-box">
    <span v-if="title" class="-title" :style="{ width: titleWidth }">{{ title }}</span>
    <p class="-content" v-html="content"></p>
  </div>
</template>

<script>
  export default {
    name: 'cell',
    props: {
      title: {
        type: String,
        default: ''
      },
      titleWidth: {
        type: String,
        default: '3rem'
      },
      content: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>
