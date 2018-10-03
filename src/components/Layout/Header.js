import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import styles from './Header.less'
import Menus from './Menu'
import config from 'config'
const { localStName } = config

const SubMenu = Menu.SubMenu

const Header = ({ logout, menuPopoverVisible, location, switchMenuPopover, permissionList, selectedKeys, updateState, navOpenKeys }) => {
    let handleClickMenu = e => e.key === 'logout' && logout()
    const menusProps = {
        permissionList,
        selectedKeys,
        handleClickNavMenu: switchMenuPopover,
        location,
        updateState,
        navOpenKeys,
    }
    const user = window.localStorage.getItem(localStName.name)
    return (
        <div className={styles.header}>
            <div></div>
            <div className={styles.rightWarpper}>
                <Menu mode="horizontal" onClick={handleClickMenu}>
                    <SubMenu style={{ float: 'right'}} title={<span><Icon type="user" />{user}</span>}>
                        <Menu.Item key="logout">
                            退出登录
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}

Header.propTypes = {
    logout: PropTypes.func,
    menuPopoverVisible: PropTypes.bool,
    location: PropTypes.object,
    switchMenuPopover: PropTypes.func,
}

export default Header
