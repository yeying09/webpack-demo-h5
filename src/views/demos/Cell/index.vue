<template lang="html">
  <div class="p-t-50">
    <TopBar back="/demo" fixed class="b-b-1">
      <SvgBack slot="left"></SvgBack>
    </TopBar>
    <Cell
        :title="item.title"
        :content="item.content"
        :has-arrow="item.arrow"
        :href="item.href"
        :is-link="item.link"
        :to="item.path"
        v-for="(item, index) in cellArray"
        :title-width="item.tWidth"
        :content-width="item.cWidth"
        :key="index">
      <img :src="item.logo" alt="logo" slot="headIcon" class="head-icon" v-if="item.logo">
      <img :src="item.clogo" alt="logo" slot="tailIcon" class="tail-icon" v-if="item.clogo">
    </Cell>
    <div class="p-20">
      <h1>说明：</h1>
      <p class="m-t-5">1.标题的图标使用slot:headIcon，内容的图标使用slot:tailIcon，建议高度35px</p>
      <p class="m-t-5">2.使用has-arrow或is-link属性会带上箭头，使用is-link必须配置to属性</p>
      <p class="m-t-5">3.标题宽度title-width和内容宽度content-width最好使用百分比配置，两者相加为97%(使两者之间有间隙)</p>
      <p class="m-t-5">4.使用href属性，可跳转外部链接。(组件没有href属性的情况下也可直接使用，因为转为a标签可直接使用)</p>
      <p class="m-t-5">5.属性：</p>
      <p>title | 标题(String)</p>
      <p>content | 内容(String)</p>
      <p>title-width | 标题宽度(String，建议使用百分比)</p>
      <p>content-width | 内容宽度(String，建议使用百分比)</p>
      <p>has-arrow | 是否带箭头(Boolean)</p>
      <p>is-link | 是否路由(Boolean)</p>
      <p>to | 链接路由(Object or String)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell-demo',
  data() {
    return {
      cellArray: [
        {
          title: '标题带图标',
          content: '',
          logo: require('@/assets/logo.png')
        },
        {
          title: '标题',
          content: '内容带图标',
          clogo: require('@/assets/logo.png')
        },
        {
          title: '标题1',
          content: '内容'
        },
        {
          title: '标题',
          content: '带arrow',
          arrow: true
        },
        {
          title: '标题',
          content: '跳转外部链接(百度)',
          arrow: true,
          href: 'https://www.baidu.com'
        },
        {
          title: '标题',
          content: '这是一个link',
          link: true,
          path: '/demo'
        },
        {
          title: '这是一个很长很长的标题',
          content: '内容'
        },
        {
          title: '标题2',
          content: '这是一段很长很长很长很长很长很长很长很长很长很长很长的内容'
        },
        {
          title: '标题宽度自定义50%标题宽度标题宽度标题宽度',
          tWidth: '50%',
          content: '内容自定义50%内容内容内容内容内容内容内容内容',
          cWidth: '50%'
        },
        {
          tWidth: '0',
          content: '无标题无标题无标题无标题无标题无标题无标题',
          cWidth: '100%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.head-icon {
  height: 35px;
}

.tail-icon {
  height: 35px;
}
</style>
