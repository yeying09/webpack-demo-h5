const dComponent = path => () => import('@/views/demos' + path);

const demoRouter = [
  {
    path: '/demo',
    name: 'demo',
    component: dComponent(''),
    meta: {
      name: 'Demo'
    }
  },
  {
    path: '/demo/cell',
    name: 'cell',
    component: dComponent('/Cell'),
    meta: {
      name: 'Cell'
    }
  },
  {
    path: '/demo/topBar',
    name: 'topBar',
    component: dComponent('/TopBar'),
    meta: {
      name: 'TopBar'
    }
  }
]

export default demoRouter
