import React, {Component} from 'react';
import styles from './Head.less'
const processList = ['项目类型', '基本信息','网站风格','网站功能','报价结果']

class Head extends Component {
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
                        <div className={index <= this.state.curIndex ? styles['checked' + index] : styles['discheck' + index] } key={'' + index}>{ item }</div>
                        {index < processList.length-1 ? <div className={index <= this.state.curIndex ? styles.next : styles.uncheck}> > </div> : '' }
                    </div>
                )
            })

        }
        </div>)
    }
}

export default Head; 