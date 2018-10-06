import React, {Component} from 'react'
import { connect } from 'dva'
import {Icons, Header, Search} from '../../components'
import styles from './index.less'

class Library extends Component {
    constructor(props){
        super(props)
        this.state = {
            showSearch: false,
            jobList: [{text: '全部', flag: true},
                        {text: '计算机服务和软件', flag: false},
                        {text: '贸易和零售', flag: false},
                        {text: '政府机构', flag: false},
                        {text: '制造', flag: false},
                        {text: '建筑', flag: false},
                        {text: '金融', flag: false},
                        {text: '教育', flag: false},
                        {text: '医疗', flag: false},
                        {text: '建筑业', flag: false}],
            typeList: [{text: '全部', flag: true},
                        {text: '企业型', flag: false},
                        {text: '展示型', flag: false},
                        {text: '营销型', flag: false},
                        {text: '电商', flag: false}],
        }
        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.selectJob = this.selectJob.bind(this);

    }

    selectJob (index, e) {
        let jobList = this.state.jobList;
         for (let i = 0; i < jobList.length; i ++ ) {
             if (index === i) {
                 jobList[i].flag =  true;
             } else {
                jobList[i].flag = false;                
             }
        }
        this.setState({
            jobList
        })
    }

    selectType (index, e) {
        let typeList = this.state.typeList;
         for (let i = 0; i < typeList.length; i ++ ) {
             if (index === i) {
                 typeList[i].flag =  true;
             } else {
                typeList[i].flag = false;                
             }
        }
        this.setState({
            typeList
        })
    }

    showSearch() {
        this.setState({showSearch: true})
    }
    closeSearch() {
        this.setState({showSearch: false})
    }

    render() {
        return (
            <div className={styles.library} >
                {
                    this.state.showSearch ? <Search closeSearch={this.closeSearch} ></Search> : ''
                }
                <Header title='案例库'></Header>
                <Icons showSearch={this.showSearch} add='true' search='true' back='true' ></Icons>
                <div className={styles.selectTab}>
                    <div className={ styles.colors } ></div>
                    <div className={ styles.jobs } >
                    {
                        this.state.jobList.map( (item, index) => {
                            return (
                                <div className={ `${styles.job} ${item.flag ? styles.checked : null}` } key={index} onClick={(e) => this.selectJob(index, e)} >{item.text}</div>
                            )
                        })
                    }
                    </div>
                    <div className={ styles.typeList } >
                    {
                        this.state.typeList.map( (item, index) => {
                            return (
                                <div className={ `${styles.type} ${item.flag ? styles.checked : null}` } key={index} onClick={(e) => this.selectType(index, e)} >{item.text}</div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((Library) => ({ Library }))(Library);
