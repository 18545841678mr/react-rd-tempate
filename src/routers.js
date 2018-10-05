
export const baseRoutes = [
    {
        path: '/login',
        models: () => [import('./models/login')],
        component: () => import('./routes/login'),
    },
    {
        path: '/step1',
        models: () => [import('./models/step1')],
        component: () => import('./routes/step1'),
    },
    {
        path: '/step2',
        models: () => [import('./models/step2')],
        component: () => import('./routes/step2'),
        path: '/routes/selectType',
        models: () => [import('./models/selectType')],
        component: () => import('./routes/selecttype'),
    },
    {
        path: '/components/Header',
        models: () => [import('./models/Header')],
        component: () => import('./components/Header'),
    }
  ]
