<template>
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <TabBar
      :menus="[
        {name: '首页', iconClass: 'icon-homepage', path: '/demo'},
        {name: '订单', iconClass: 'icon-order', path: '/demo/topBar'},
        {name: '我的', iconClass: 'icon-mine', path: '/demo/tabBar'}
      ]"
      >
    </TabBar>
  </div>
</template>

<script>
  export default {
    name: 'tabBar-demo',
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
