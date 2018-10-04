
export const baseRoutes = [
    {
        path: '/routes/login',
        models: () => [import('./models/login')],
        component: () => import('./routes/login'),
    },
    {
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
