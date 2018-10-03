import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import { config } from 'utils'
import styles from './Layout.less'
import Menus from './Menu'

const Sider = ({ location, permissionList, updateState,selectedKeys, navOpenKeys, changeOpenKeys, dispatch }) => {
    const menusProps = {
        permissionList,
        location,
        updateState,
        selectedKeys,
        navOpenKeys,
        changeOpenKeys,
        dispatch,
    }
    return (
        <div>
            <div className={styles.logo}>
                <img alt={'logo'} src={config.logo} />
                <span className={styles.logoTitle}>如来系统</span>
            </div>
            <Menus {...menusProps} />
        </div>
    )
}

Sider.propTypes = {
    location: PropTypes.object,
}

export default Sider
