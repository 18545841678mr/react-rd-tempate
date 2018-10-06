import React from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from './index.less'

const Step3 = () => {

    return (
        <div className={styles.wrap}>
            <Form>
                <div className={styles.design}>
                    <div className={styles.formHeader}>
                        <h1>设计</h1>
                    </div>
                    <div className={styles.formTop}>

                    </div>
                    <div className={styles.formBottom}></div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.formHeader}>
                        <h1>网站框架</h1>
                        <div>
                            <span>当前选中</span>
                            <ul>
                                <li>公司新闻</li>
                            </ul>
                        </div>
                        <span>编辑</span>
                    </div>
                    <div className={styles.formTop}></div>
                    <div className={styles.formBottom}></div>
                </div>
            </Form>
        </div>
    )
}

export default connect((step3) => ({ step3 }))(Step3);