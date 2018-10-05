import React, { Component } from 'react'
import styles from './Header.less'
import Head  from '../Head'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '售前项目管理系统'
        }
    }

    componentWillMount(){
        if(this.props.title) {
            this.setState({title: this.props.title});
        }
    }

    render () {
        return (<div className={ styles.header }>
            <div className={styles.head}>
                <div className={ styles.leftItem } >{this.state.title}</div>
                <div className={ styles.rightItem } >
                    <div className={ styles.website }>官方网站</div>
                    <div className={ styles.demo }>案例库</div>
                    <div className={ styles.order }>个人订单</div>
                    <div className={ styles.line }>|</div>
                    <div className={ styles.user } >11111</div>
                </div>
            </div>
            <Head curIndex={this.props.curIndex}></Head>
        </div>)
    }
}

export default Header;