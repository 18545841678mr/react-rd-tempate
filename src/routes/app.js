/* global window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import '../themes/index.less'
import './app.less'
import Error from './error'

class App extends Component {

}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
