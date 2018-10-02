
export const baseRoutes = [
    {
        path: '/routes/login',
        models: () => [import('./routes/login')],
        component: () => import('./routes/login'),
    }
  ]

export const businessRoutes = []
