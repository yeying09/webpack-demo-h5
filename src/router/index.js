import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Base = () => import('@/views/Base');
const DemoHome = () => import('@/views/demos/Home');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: Base,
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoHome
    }
  ]
})
