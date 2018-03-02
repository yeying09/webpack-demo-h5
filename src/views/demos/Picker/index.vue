<template>
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <Cell title="点击打开Picker" @click.native="showPicker1 = true">
    </Cell>
    <Picker
      :showed="showPicker1"
      @close ="showPicker1 = false"
      :picker-array="picker1"
      >
    </Picker>
  </div>
</template>

<script>
  export default {
    name: 'picker-demo',
    mixins: [],
    components: {},
    data() {
      return {
        showPicker1: false,
        picker1: [
          {values: ['北京', '上海', '浙江','北京', '上海', '浙江']},
          {divider: true, content: '-'},
          {values: ['北京', '北京郊区']}
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
