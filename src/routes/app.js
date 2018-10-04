/* global window */
import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import '../themes/index.less'
import './app.less'
import Error from './error'

const App = ({
    children, dispatch, app, loading, location,
}) => {
    console.log(children);
    return (
        <div>{children}</div>
    )
}

App.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    app: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
