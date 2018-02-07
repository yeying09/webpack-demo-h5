import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demos from './demo'

const Base = () => import('@/views/Base');

Vue.use(Router)

const regularRouter = [
        {
          path: '/',
          name: 'base',
          component: Base,
          redirect: '/demo'
        }
      ];
let totalRouter = regularRouter.concat(demos);

export default new Router({
  routes: totalRouter
})
