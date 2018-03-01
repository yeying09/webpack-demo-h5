<template>
  <div class="nav-bar-box dis-flex shadow-xs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'navBar-component',
    mixins: [],
    components: {},
    props: {},
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      next();
    },
    created() {},
    mounted() {
      // 校验
      this.checkChildren();
    },
    computed: {},
    methods: {
      /**
       * 检查子元素是否都是TabBarItem组件
       * */
      checkChildren() {
        try{
          let children = this.$slots.default
          let len = children.length
          for(let i=0; i<len; i++) {
            if(!children[i].tag || children[i].tag.indexOf('tabBarItem') === '-1') {
              throw new Error('please use TabBarItem in TabBar');
            }
            // 计算宽度
            children[i].elm.style.width = 1 / len *100 +'%';
          }
        }catch(e) {
          console.error(e);
        }
      }
    },
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
