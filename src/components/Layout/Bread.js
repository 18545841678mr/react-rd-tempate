import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'
import { queryArray } from 'utils'
import styles from './Bread.less'

const Bread = ({ location, permissionList: menu }) => {
    // 匹配当前路由
    let filterRoutes = ['/operating/warzone/add','/operating/warzone/edit']
    let rootRoutes = ['-','/operating','/operation','/transport','/payroll','/warehouse']
    let pathArray = []
    let current
    const pathname = location.pathname
    const newPath = (/^\D+(?=\d)/.exec(pathname))? (/^\D+(?=\d)/.exec(pathname))[0] : pathname
    const router_pathname = newPath.indexOf('/detail') > 0 ? newPath.indexOf('/detail') : newPath.length
    for (let index in menu) {
        if (menu[index].route && pathToRegexp(menu[index].route).exec(location.pathname.substring(0, router_pathname))) {
            if(menu[index].route == '/operating/warzone/add'){
                menu[index].title = '新增战队-战区'
            }
            if(menu[index].route == '/operating/warzone/edit'){
                menu[index].title = '编辑战队-战区'
            }
            current = menu[index]
            break
        }
    }
    const getPathArray = (item) => {
        pathArray.unshift(item)
        if (item.fid) {
            getPathArray(queryArray(menu, item.fid, 'id'))
        }
    }
    if(pathname.indexOf('/detail') > 0){
        let title = '查看明细'
        pathArray.push({
            title: title,
        })
    }




    let paramMap = {}
    if (!current) {
        pathArray.push(menu[0] || {
            id: 1,
            icon: 'laptop',
            name: 'Dashboard',
        })
        pathArray.push({
            id: 404,
            name: 'Not Found',
        })
    } else {

        getPathArray(current)
        let keys = []
        let values = pathToRegexp(current.route, keys).exec(location.pathname.replace('#', ''))
        if (keys.length) {
            keys.forEach((currentValue, index) => {
                if (typeof currentValue.name !== 'string') {
                    return
                }
                paramMap[currentValue.name] = values[index + 1]
            })
        }
    }
    // 递归查找父级
    const breads = pathArray.map((item, key) => {
        const content = (<span>{item.title}</span>)
        return (
            <Breadcrumb.Item key={key}>
                {((pathArray.length - 1) !== key && !item.children &&!rootRoutes.includes(item.route))?
                    <a onClick={() => {history.go(-1)}}>
                        {content}
                    </a>
                  : content}
            </Breadcrumb.Item>
        )
    })

    return (
        <div className={styles.bread}>
            <Breadcrumb className={styles.breadFont}>
                {breads}
            </Breadcrumb>
        </div>
    )
}

Bread.propTypes = {
    permissionList: PropTypes.array,
    location: PropTypes.object,
}

export default Bread
