/* global window */
import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Layout, Loader } from 'components'
import { classnames, config } from 'utils'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import '../themes/index.less'
import './app.less'
import Error from './error'

const { prefix, openPages } = config

const { Header, Bread, Sider, styles } = Layout
let lastHref

const App = ({ children, dispatch, app, loading, location }) => {
    const { menuPopoverVisible, permissionList, selectedKeys, navOpenKeys } = app
    let { pathname } = location
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
    const { iconFontJS, iconFontCSS, logo } = config
    const href = window.location.href

    if (lastHref !== href) {
        NProgress.start()
        if (!loading.global) {
            NProgress.done()
            lastHref = href
        }
    }

    const headerProps = {
        permissionList,
        selectedKeys,
        location,
        menuPopoverVisible,
        navOpenKeys,
        switchMenuPopover () {
            dispatch({ type: 'app/switchMenuPopver' })
        },
        logout () {
            dispatch({ type: 'app/logout' })
        },
        updateState(payload) {
            dispatch({type: 'app/updateState', payload})
        },
        changeOpenKeys (openKeys) {
        dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
    }

    const siderProps = {
        location,
        permissionList,
        selectedKeys,
        navOpenKeys,
        dispatch,
        updateState(payload) {
            dispatch({type: 'app/updateState', payload})
        },
        changeOpenKeys (openKeys) {
            window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
            dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
        },
    }

    const breadProps = {
        permissionList,
        location,
    }
    if (openPages && openPages.includes(pathname)) {
        return (<div>
            <Loader fullScreen spinning={loading.effects['app/query']} />
            {children}
        </div>)
    }
    return (
        <div>
            <Loader fullScreen spinning={loading.effects['app/query']} />
            <Helmet>
                <title>如来系统</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                {iconFontJS && <script src={iconFontJS} />}
                {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
            </Helmet>
            <div className={styles.layout}>
                <aside className={styles.sider}>
                    {siderProps.permissionList.length === 0 ? null : <Sider {...siderProps} />}
                </aside>
                <div className={styles.main}>
                    <Header {...headerProps} />
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <Bread {...breadProps} />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
