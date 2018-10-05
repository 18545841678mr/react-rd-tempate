import React, {Component} from 'react'
import {connect} from 'dva'
import {Button, Icon, Input, Select, Timeline, message, DatePicker, Radio} from 'antd'
import styles from './index.less'

class SelectType extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: [],
        }
    }

    render () {
        return (<div className={ styles.select }>
            <div className={ styles.title }>
                <h1>请选择项目类型</h1>
                <div className={ styles.desc }>请选择项目类型，更好的为您准确评估项目价格。</div>
            </div>
            <div className={ styles.selecttab }>
                <div className={ styles.first }>
                    <div className={ styles.web }>WEB网站</div>
                    <div className={ styles.sale }>整合营销</div>
                </div>
                <div className={ styles.second }>
                    <div className={ styles.h5e }>H5微传单</div>
                    <div className={ styles.star }>增值服务</div>
                    <div className={ styles.light }>网站策略</div>
                </div>
            </div>
        </div>)
    }
}

export default SelectType;