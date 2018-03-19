// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/js/common/flexible'

import '@/assets/styles/reset.scss'
import '@/assets/styles/public.scss'
import '@/assets/styles/helper.scss'

import '@/assets/font/iconfont.scss'
import '@/assets/font/iconfont.js'

import '@/components/global'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
