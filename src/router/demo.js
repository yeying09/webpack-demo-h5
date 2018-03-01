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
      name: '色卡'
    }
  },
  {
    path: '/demo/navBar',
    name: 'navBar',
    component: dComponent('/NavBar'),
    meta: {
      name: '底部导航'
    }
  },
  {
    path: '/demo/picker',
    name: 'picker',
    component: dComponent('/Picker'),
    meta: {
      name: 'Picker'
    }
  }
]

export default demoRouter
