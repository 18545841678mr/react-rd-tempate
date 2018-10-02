import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/app'
import baseRoutes from './routers'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  const error = dynamic({
      app,
      component: () => import('./routes/error'),
  })

  const routes = [].concat(baseRoutes)

  return (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/routes/login" />)} />
                {
                    routes.map(({ path, ...dynamics }, key) => (
                        <Route key={key}
                            exact
                            path={path}
                            component={dynamic({
                                app,
                                ...dynamics,
                            })}
                        />
                    ))
                }
                <Route component={error} />
            </Switch>
        </App>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default RouterConfig;
