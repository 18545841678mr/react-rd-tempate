import React, {Component} from 'react';
import styles from './Head.less'
const processList = ['项目类型', '基本信息','网站风格','网站功能','报价结果']

class Head extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curIndex: ''
        }
    }
    render() {
        return (<div className="headTab">
        {
            processList.map( (item, index) => { 
                return (
                    <div key={index}>
                        <div className={index <= this.props.curIndex ? styles.checked : styles.disChenck} key={'' + index}>{ item }</div>
                        {this.props.curIndex < processList.length ? <div className={index <= this.props.curIndex ? styles.next : styles.uncheck}> > </div> : '' }
                    </div>
                )
            })

        }
        </div>)
    }
}

export default Head; 