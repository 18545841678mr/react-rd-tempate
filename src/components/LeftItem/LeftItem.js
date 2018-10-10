import React, {Component} from 'react';
import styles from './LeftItem.less'

import type1 from '../../assets/checked/type.png';
import type2 from '../../assets/uncheck/type.png';
import infomation1 from '../../assets/checked/infomation.png';
import infomation2 from '../../assets/uncheck/infomation.png';
import style1 from '../../assets/checked/style.png';
import style2 from '../../assets/uncheck/style.png';
import func1 from '../../assets/checked/func.png';
import func2 from '../../assets/uncheck/func.png';
import price1 from '../../assets/checked/price.png';
import price2 from '../../assets/uncheck/price.png';



const processList = [{text: '项目类型', src1: type1, src2: type2}, 
                    {text:'基本信息', src1: infomation1, src2: infomation2 }, 
                    {text: '网站风格', src1: style1, src2: style2 },
                    {text: '网站功能', src1: func1, src2: func2 }, 
                    {text: '报价结果', src1: price1, src2: price2}];

class LeftItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curIndex: 0
        }
    }

    componentWillMount() {
        this.setState({curIndex: this.props.curIndex});
    }
    
    render() {
        return (<div className={styles.headTab}>
        {
            processList.map( (item, index) => { 
                return (
                    <div className={ styles.list } key={index}>
                        <img style={{width: '20px'}} src={index <= this.state.curIndex ? item.src1 : item.src2} alt=""/>
                        <div className={index <= this.state.curIndex ? styles.checked : styles.discheck } key={'' + index}>{ item.text }</div>
                    </div>
                )
            })

        }
        </div>)
    }
}

export default LeftItem; 