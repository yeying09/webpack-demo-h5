<template>
  <div class="tab-bar-box dis-flex shadow-xs">
    <router-link class="-item dis-flex flex-column flex-main-center flex-cross-center"
      v-for="(item, index) in menus"
      :key="'menu'+index"
      :to="{path: item.path}"
      :style="{width: 1/menus.length*100 +'%'}">
      <svg class="iconsvg tab-iconsvg" aria-hidden="true" v-if="item.iconClass">
        <use :xlink:href="$route.path === item.path?'#'+item.iconClass+'_fill': '#'+item.iconClass"
          :class="{'-active': $route.path === item.path}">
        </use>
      </svg>
      <em :class="{'text-orange': $route.path === item.path}">{{item.name || 'menu1'}}</em>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'tabBar-component',
    mixins: [],
    components: {},
    props: {
      menus: {
        type: Array,
        default: function () {
          return [{name: 'menu1'}]
        }
      },
      size: {
        type: Number,
        default: 1
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
