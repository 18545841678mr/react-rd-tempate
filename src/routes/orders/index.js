import React, {Component} from 'react'
import { connect } from 'dva'
import {Icons, Header, Search, PageButton} from '../../components'
import styles from './index.less'
let rev = 1;

class Orders extends Component {
    constructor(props){
        super(props)
        this.state = {
            showSearch: false,
            orderList: [{name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: 1000, flag: 1, },
                        {name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: 3000, flag: 0, },
                        {name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: 200, flag: 0, },
                        {name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: 12000, flag: 0, },
                        {name: '售前项目管理系统', buildTime: '180108', changeTime: '180108', customer: '马洪彪', tel: '13011825913', price: 4000, flag: 1, }],
            indexList: [],
            pageSize: 10,
            current: 1,
            goValue: 0,
            totalPage: 0
        }

        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.byState = this.byState.bind(this);
        this.byPrice = this.byPrice.bind(this);
        this.hand = this.hand.bind(this);


    }

    componentWillMount(){
        this.setState({
            totalPage:Math.ceil( this.state.orderList.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)

    }

    sortBy(attr) {
        rev = rev * -1;
        return function (a, b) {
            a = a[attr];
            b = b[attr];
            if (a < b) {
                return rev * -1 ;
            }
            if (a > b) {
                return rev * 1;
            }
            return 0;
        }
    }

    showSearch() {
        this.setState({showSearch: true})
    }
    closeSearch() {
        this.setState({showSearch: false})
    }

    byState() {
        let orderList = this.state.orderList;        
        orderList.sort(this.sortBy('flag'));
        this.setState({
            orderList
        })
    }

    byPrice() {
        let orderList = this.state.orderList;        
        orderList.sort(this.sortBy('price'));
        this.setState({
            orderList
        })
    }

    delete(index, e) {
        let orderList = this.state.orderList;        
        orderList.splice(index, 1);
        this.setState({
            orderList
        })
    }

    hand (e) {
        console.log(e.target.value);
        this.setState({pageSize: parseInt(e.target.value)})
    }

    setPage(num){
        this.setState({
            indexList:this.state.orderList.slice(num,num+this.state.pageSize)
        })
    }

    pageNext = (num) => {
        this.setPage(num)
    }

    render() {
        return (
            <div className={styles.orders} >
                {
                    this.state.showSearch ? <Search closeSearch={this.closeSearch} ></Search> : ''
                }
                <Header title='马洪彪的订单'></Header>
                <div className={styles.orderTab}>
                    <div onClick={this.byState} className={styles.orderState}>
                        签约状态
                    </div>
                    <div onClick={this.byPrice} className={styles.orderPrice}>
                        订单金额
                    </div>
                </div>
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
                        this.state.indexList.map( (item, index) => {
                            return (
                                <div className={styles.info} key={index}>
                                    <div>{index + 1}</div>
                                    <div>{item.name}</div>
                                    <div>{item.buildTime}</div>
                                    <div>{item.changeTime}</div>
                                    <div>{item.customer}</div>
                                    <div>{item.tel}</div>
                                    <div>{item.price}</div>
                                    <div className={item.flag ? styles.signed : styles.signin}>{item.flag ? '已签约' : '签约'}</div>
                                    <div className={styles.todo}>
                                        <div className={styles.pdf}></div>
                                        <div className={styles.edit}></div>
                                        <div className={styles.delete} onClick={(e) => this.delete(index, e)} ></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>

                    <div className={styles.pageItem}>
                        <div>
                            每页 <select value={this.state.pageSize} onChange={this.hand}>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                            </select> 条记录
                        </div>  
                        <PageButton { ...this.state } pageNext={this.pageNext} ></PageButton>  
                    </div>
                </div>
               
            </div>
        )
    }
}

export default connect((Orders) => ({ Orders }))(Orders);
