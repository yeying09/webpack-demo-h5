<template>
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <NavBar>
      <TabBarItem
        v-for="(menu, index) in menus" :key="index"
        :menu="menu">
      </TabBarItem>
    </NavBar>
    <div class="p-20">
      <h1>说明：</h1>
      <p class="m-t-5">1.配合TabBarItem使用</p>
      <p class="m-t-5">2.图标使用svg(iconfont下载), 可根据需要改成i标签或img或使用插槽slot</p>
      <p class="m-t-5">3.TabBarItem宽度根据个数计算百分比</p>
      <p class="m-t-5">4.固定在底部</p>
      <p class="m-t-5">5.属性(TabBarItem)：</p>
      <p>menu.name | 名字</p>
      <p>menu.iconClass | 图标class(svg)</p>
      <p>menu.path | 路由路径</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navBar-demo',
    mixins: [],
    components: {},
    data() {
      return {
        menus: [
          {name: '首页', iconClass: 'icon-homepage', path: '/demo'},
          {name: '订单', iconClass: 'icon-order', path: '/demo/topBar'},
          {name: '我的', iconClass: 'icon-mine', path: '/demo/navBar'}
        ]
      }
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
