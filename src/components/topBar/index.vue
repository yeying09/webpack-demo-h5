<template>
  <div class="top-bar-box">

  </div>
</template>

<script>
  export default {
    name: 'topbar-component',
    mixins: [],
    components: {},
    props: {
      bgTransparent: { // 背景是否透明，不透明则字体为白
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
