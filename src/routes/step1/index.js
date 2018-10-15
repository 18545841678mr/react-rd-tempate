import React, {Component} from 'react'
import { connect } from 'dva'
import styles from './index.less'
import {Head, Header, LeftItem} from '../../components'

import iconWeb from '../../assets/images/step1/icon-web.png'
import iconData from '../../assets/images/step1/icon-data.png'
import iconH5 from '../../assets/images/step1/icon-h5.png'
import iconMore from '../../assets/images/step1/icon-more.png'
import iconIdea from '../../assets/images/step1/icon-idea.png'

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeList: [{text: 'WEB网站', flag: false, index: 0, src1: iconWeb},
                {text: '整合营销', flag: false, index: 1, src1: iconData },
                {text: 'H5微传单', flag: false, index: 2, src1: iconH5},
                {text: '增值服务', flag: false, index: 3, src1: iconMore},
                {text: '网站策划', flag: false, index: 4, src1: iconIdea}],
            typeArr: [],
        }

        this.selectType = this.selectType.bind(this);
    }

    next = () => {
        // console.log(this.state.typeArr);
        localStorage.setItem('typeArr', this.state.typeArr)
        this.props.history.push('/step2');
    }

    selectType (index, e) {
        let typeList = this.state.typeList;
        console.log(typeList,index)
        let typeArr = this.state.typeArr;
        for (let i = 0; i < typeList.length; i ++ ) {
            if( i === index ) {
                typeList[i].flag  = !typeList[i].flag;
                console.log(typeList[i].flag)
                if (typeList[i].flag) {
                    typeArr.push(i);
                } else {
                    typeArr.splice(typeArr.indexOf(typeList[i].index), 1);
                }
            }
        }

        this.setState({
            typeArr,
            typeList
        })

    }

    render() {
        return (
            <div className={styles.wrap}>
                <Header></Header>
                <Head curIndex='0'></Head>
                <LeftItem curIndex='0' ></LeftItem>    
                <div className={styles.title}>
                    <h1>请选择项目类型</h1>
                    <p>请选择项目类型，更好的为您准确评估项目价格</p>
                </div>
                <ul className={styles.typeList}>
                {
                    this.state.typeList.map( (item, index) => {
                        return (
                            <li style={!item.flag ? {} : {background: '#1696f6', color: '#fff'}} onClick={ (e) => this.selectType(index, e) } key={index}>
                                <img  src={item.src1} />
                                <p>{item.text}</p>
                            </li>
                        )
                    })
                }
                </ul>
                <button onClick={ this.next }>下一步</button>
            </div>
        )
    }
}

export default connect((step1) => ({ step1 }))(Step1);