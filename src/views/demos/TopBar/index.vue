<template>
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <div>
      <TopBar title="没有返回功能">
      </TopBar>
      <TopBar title="有背景色" bg-color="teal">
      </TopBar>
      <TopBar back="/demo" title="有返回功能" class="b-b-1">
        <SvgBack slot="left"></SvgBack>
      </TopBar>
      <TopBar title="有操作功能" class="b-b-1">
        <p slot="right">编辑</p>
      </TopBar>
      <TopBar back="/demo" title="设置字体颜色" f-color="teal" class="b-b-1">
        <span slot="left">返回</span>
        <p slot="right">编辑</p>
      </TopBar>
    </div>
    <div class="p-20">
      <h1>说明：</h1>
      <p class="m-t-5">1.slot:left定义居左的返回样式，可使用SvgBack图标或文字，或其他自定义</p>
      <p class="m-t-5">2.slot:right定义居右的简单操作功能按钮</p>
      <p class="m-t-5">3.标题使用title属性定义，未定义情况下默认使用路由配置里的属性meta里的name</p>
      <p class="m-t-5">4.默认没有白色字体，字体颜色使用自定义黑色；设置背景色的情况下，字体颜色默认白色</p>
      <p class="m-t-5">5.fixed为true时，position为fixed</p>
      <p class="m-t-5">6.属性：</p>
      <p>title | 标题(String)(默认$route.meta.name)</p>
      <p>bg-color | 背景色(可选值在color公共样式定义)</p>
      <p>f-color | 字体颜色(可选值在color公共样式定义)</p>
      <p>back | 返回的路由(Object or String)</p>
      <p>fixed | 是否固定在顶部(默认不固定)</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topbar-demo',
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
