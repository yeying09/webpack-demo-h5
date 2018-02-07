const vComponent = path => () => import('@/views/' + path);

const demoRouter = [
  {
    path: '/demo',
    name: 'demo',
    component: vComponent('demos')
  },
  {
    path: '/demo/cell',
    name: 'cell',
    component: vComponent('demos/Cell')
  }
]

export default demoRouter
