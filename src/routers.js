
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
    },
    {
        path: '/step3',
        models: () => [import('./models/step3')],
        component: () => import('./routes/step3'),
    },
    {
        path: '/final',
        models: () => [import('./models/final')],
        component: () => import('./routes/final'),
    },
    {
        path: '/library',
        models: () => [import('./models/library')],
        component: () => import('./routes/library'),
    },
    {
        path: '/orders',
        model: () => [import('./models/orders')],
        component: () => import('./routes/orders'),
    }
  ]
