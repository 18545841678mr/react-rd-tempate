import React, {Component} from 'react'
import { connect } from 'dva'
import { Form,Radio, Select, Upload, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less'
import {Head, Header} from '../../components'



class Step5 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            price: 25000,
            page: 0,
            funs: 0,
            time: '20-25'
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                <Header></Header>
                <Head curIndex='5'></Head>
                <div className={styles.container} >
                    <div className={styles.priceItem} >
                        <h3>整体报价</h3>
                        <div style={{ color: '#FF0000', fontSize: '24px' }}>￥{this.state.price}元</div>
                        <div className={styles.total}>
                            <h3>总计</h3>
                            <p>
                                页面数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.page}页
                            </p>  
                            <p>
                                功能点:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.funs}个功能点
                            </p>
                            <p>
                                预计开发时间:&nbsp;&nbsp;&nbsp;{this.state.time}个工作日
                            </p> 
                        </div>
                        <Button style={{background: '#1696f6', color: '#fff', display: 'block', marginTop: '25px'}}>查看清单</Button>
                    </div>
                    <div className={styles.buttonItem}>
                        <Button style={{display: 'block'}}>重新调整报价</Button>
                        <Button style={{display: 'block', marginTop: '20px', background: '#1696f6', color: '#fff'}} >保存到我的报价</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((Step5) => ({ Step5 }))(Step5);