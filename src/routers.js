
export const baseRoutes = [
    {
        path: '/routes/login',
        models: () => [import('./models/login')],
        component: () => import('./routes/login'),
    }
  ]
