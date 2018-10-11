import React, {Component} from 'react'
import { connect } from 'dva'
import styles from './index.less'
import {Head, Header} from '../../components'



class Step4 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                <Header></Header>
                <Head curIndex='5'></Head>
                
            </div>
        )
    }
}

export default connect((Step5) => ({ Step5 }))(Step5);