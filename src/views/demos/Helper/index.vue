<template>
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <h1 class="p-10">【color】</h1>
    <div class="color-box"></div>
  </div>
</template>

<script>
  export default {
    name: 'helper-demo',
    mixins: [],
    components: {},
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

</style>
