<template>
  <div
    class="top-bar-box dis-flex flex-main-center flex-cross-center"
    :class="[{'p-l-5': back}, bgColor? 'bg-'+bgColor: '', fixed? 'fixed-top': 'pos-r']">
    <router-link
      class="top-back"
      :class="[bgColor? 'text-white': 'text-'+fColor]"
      :to="back"
      v-if="back">
      <slot name="left"></slot>
    </router-link>
    <p
      class="top-title text-ellipsis text-center"
      :class="[bgColor? 'text-white font-sans': 'text-'+fColor]">
      {{title || $route.meta.name}}
    </p>
    <div
      class="top-right pos-a"
      :class="[bgColor? 'text-white font-sans': 'text-'+fColor]">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topbar-component',
    mixins: [],
    components: {},
    props: {
      title: {
        type: String,
        default: ''
      },
      bgColor: { // 全局定义的颜色工具
        type: String,
        default: ''
      },
      fColor: { // 全局定义的颜色工具
        type: String,
        default: 'black'
      },
      back: {
        type: [Object, String]
      },
      fixed: { // 是否固定顶部
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      next();
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {},
    filters: {},
    watch: {},
    destroyed() {},
    beforeRouteLeave(to, from, next) {
      next();
    }
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>
