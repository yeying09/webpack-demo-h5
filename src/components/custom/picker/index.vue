<template>
  <div class="layer-box" :class="[{'layer-mask': hasMask}, {'-show': showed}]" @click="clickMe">
    <div class="dis-flex flex-cross-center popup-box" :class="[{'-show': showed}]" @click.stop="true">
      <div
        class="picker-ul"
        :class="[litem.divider? 'flex-0':'flex-1']"
        v-for="(litem, index) in pickerArray"
        :key="index">
        <div v-if="litem.divider">{{litem.content}}</div>
        <ul v-else>
          <li
            class="p-t-5 p-r-10 p-b-5 p-l-10"
            v-for="(item, i) in litem.values"
            :key="i"
            :style="{ textAlign: litem.align || 'center' }">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'picker-component',
    mixins: [],
    components: {},
    props: {
      hasMask: {
        type: Boolean,
        default: true
      },
      showed: {
        type: Boolean,
        default: false
      },
      maskClick: { // 是否可点击遮罩层关闭
        type: Boolean,
        default: true
      },
      pickerArray: {
        type: Array,
        default: function () {
          return []
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
    methods: {
      clickMe() {
        if(this.maskClick) {
          this.$emit('close')
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
