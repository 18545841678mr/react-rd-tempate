import React, {Component} from 'react'
import { connect } from 'dva'
import {Icons, Header, Search} from '../../components'
import styles from './index.less'

class Orders extends Component {
    constructor(props){
        super(props)
        this.state = {
            showSearch: false,
            orderList: [{name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: '5000', flag: true, }]
        }

        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }

    showSearch() {
        this.setState({showSearch: true})
    }
    closeSearch() {
        this.setState({showSearch: false})
    }

    render() {
        return (
            <div className={styles.orders} >
                {
                    this.state.showSearch ? <Search closeSearch={this.closeSearch} ></Search> : ''
                }
                <Header title='马洪彪的订单'></Header>
                <Icons showSearch={this.showSearch} search='true' back='true' ></Icons>
                <div className={ styles.orderItem }>
                    <div className={ styles.title }>
                        <p>序号</p>
                        <p>项目名称</p>
                        <p>创建时间</p>
                        <p>修改时间</p>
                        <p>客户联系人</p>
                        <p>联系电话</p>
                        <p>订单金额</p>
                        <p>状态</p>
                        <p>操作</p>
                    </div>
                    <div className={styles.orderList}>
                    {
                        this.state.orderList.map( (item, index) => {
                            return (
                                <div className={styles.info}>
                                    <div>{index + 1}</div>
                                    <div>{item.name}</div>
                                    <div>{item.buildTime}</div>
                                    <div>{item.changeTime}</div>
                                    <div>{item.customer}</div>
                                    <div>{item.tel}</div>
                                    <div>{item.price}</div>
                                    <div className={item.flag ? styles.signed : styles.signin}>{item.flag ? '已签约' : '签约'}</div>
                                    <div className={styles.todo}>
                                        <div className={styles.icon1}></div>
                                        <div className={styles.edit}></div>
                                        <div className={styles.delete}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
               
            </div>
        )
    }
}

export default connect((Orders) => ({ Orders }))(Orders);
