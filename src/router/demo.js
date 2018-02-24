const dComponent = path => () => import('@/views/demos' + path);

const demoRouter = [
  {
    path: '/demo',
    name: 'demo',
    component: dComponent(''),
    meta: {
      name: '示例'
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
  },
  {
    path: '/demo/colorCard',
    name: 'colorCard',
    component: dComponent('/ColorCard'),
    meta: {
      name: 'Color Card'
    }
  },
  {
    path: '/demo/tabBar',
    name: 'tabBar',
    component: dComponent('/TabBar'),
    meta: {
      name: 'TabBar'
    }
  }
]

export default demoRouter
