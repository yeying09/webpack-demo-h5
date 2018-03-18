<template>
  <router-link
    class="dis-flex flex-column flex-main-center flex-cross-center"
    :to="{path: menu.path}">
    <svg class="iconsvg tab-iconsvg" aria-hidden="true" v-if="menu.iconClass">
      <use :xlink:href="$route.path === menu.path?'#'+menu.iconClass+'_fill': '#'+menu.iconClass"
           :class="{'-active': $route.path === menu.path}">
      </use>
    </svg>
    <em :class="{'text-orange': $route.path === menu.path}">{{menu.name}}</em>
  </router-link>
</template>

<script>
  export default {
    name: 'tabBarItem-component',
    mixins: [],
    components: {},
    props: {
      menu: {
        type: Object,
        default: function() {
          return {
            path: '',
            iconClass: '',
            name: ''
          }
        }
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
