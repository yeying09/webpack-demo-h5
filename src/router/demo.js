const DemoComponent = path => () => import('@/views/' + path);

const demoRouter = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoComponent('demos')
  },
  {
    path: '/demo/cell',
    name: 'cell',
    component: DemoComponent('demos/Cell')
  }
]

export default demoRouter
