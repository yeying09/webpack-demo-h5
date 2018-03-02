<template>
  <div class="layer-box" :class="[{'layer-mask': hasMask}, {'-show': showed}]" @click="clickMe">
    <div class="dis-flex flex-cross-center popup-box" :class="[{'-show': showed}]" @click.stop="">
      <div
        class="picker-ul"
        :class="[litem.divider? 'flex-0':'flex-1']"
        :style="{'transform': (litem.divider? '':'translateY('+36*2/37.5+'rem)')}"
        v-for="(litem, index) in pickerArray"
        :ref="'ul_'+index"
        :key="index">
        <div v-if="litem.divider">{{litem.content}}</div>
        <ul class="pick-list" @touchstart="touchstart($event)" @touchmove="touchmove($event, 'ul_'+index)" @touchend="touchend($event, 'ul_'+index)" v-else>
          <li
            class="p-l-10 p-r-10 picker-item"
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
      return {
        values: [],
        startP: 0,
        endP: 0
      }
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
      },
      changeValue() {
        this.$emit('change', this.values);
      },
      touchstart(event) {
        console.log(event)
        this.startP = event.touches[0].pageY;
      },
      touchmove(event, ul) {
        this.endP = event.touches[0].pageY;
        let offP = this.endP - this.startP,
          absOffP = Math.abs(offP),
          transformStr = this.$refs[ul][0].style.transform
        let indexBrace = transformStr.indexOf('('),
          indexUnit = transformStr.indexOf('rem'),
          nowoff = transformStr.substring(indexBrace+1, indexUnit)
        // if(absOffP > 36/2)
        console.log(this.$refs[ul][0].style.transform)
        this.$refs[ul][0].style.transform = 'translate(' +(offP/37.5 + nowoff) + 'rem)';
      },
      touchend(event, ul) {
        console.log(ul)
        const offP = Math.abs(this.endP - this.startP);
        console.log(offP);
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
