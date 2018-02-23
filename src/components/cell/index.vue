<template>
  <router-link :to="to" class="dis-flex flex-main-between flex-cross-center cell-box" v-if="isLink">
    <div class="dis-flex flex-cross-center flex-1" :style="{ width: titleWidth }">
      <slot name="headIcon"></slot>
      <span v-if="title" class="text-left">{{ title }}</span>
    </div>
    <div class="dis-flex flex-cross-center flex-main-tail flex-1" :style="{ width: contentWidth }">
      <p class="text-right">{{content}}</p>
      <slot name="tailIcon"></slot>
      <i class="flex-0 -arrow" v-if="hasArrow || isLink"></i>
    </div>
  </router-link>

  <a :href="href" class="dis-flex flex-main-between flex-cross-center cell-box" v-else>
    <div class="dis-flex flex-cross-center flex-1" :style="{ width: titleWidth }">
      <slot name="headIcon"></slot>
      <span v-if="title" class="text-left">{{ title }}</span>
    </div>
    <div class="dis-flex flex-cross-center flex-main-tail flex-1" :style="{ width: contentWidth }">
      <p class="text-right">{{content}}</p>
      <slot name="tailIcon"></slot>
      <i class="flex-0 -arrow" v-if="hasArrow || isLink"></i>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'cell-component',
    props: {
      title: {
        type: String,
        default: ''
      },
      titleWidth: {
        type: String,
        default: '33%'
      },
      content: {
        type: String
      },
      contentWidth: {
        type: String,
        default: '64%'
      },
      hasArrow: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: 'javascript:void(0);'
      },
      isLink: {
        type: Boolean,
        default: false
      },
      to: {
        type: [String, Object]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>
