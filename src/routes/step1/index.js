import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

import iconWeb from '../../assets/images/step1/icon-web.png'
import iconData from '../../assets/images/step1/icon-data.png'
import iconH5 from '../../assets/images/step1/icon-h5.png'
import iconMore from '../../assets/images/step1/icon-more.png'
import iconIdea from '../../assets/images/step1/icon-idea.png'

const Step1 = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}>
                <h1>请选择项目类型</h1>
                <p>请选择项目类型，更好的为您准确评估项目价格</p>
            </div>
            <ul className={styles.typeList}>
                <li>
                    <img src={iconWeb}/>
                    <p>WEB网站</p>
                </li>
                <li>
                    <img src={iconData}/>
                    <p>整合营销</p>
                </li>
                <li>
                    <img src={iconH5}/>
                    <p>H5微传单</p>
                </li>
                <li>
                    <img src={iconMore}/>
                    <p>增值服务</p>
                </li>
                <li>
                    <img src={iconIdea}/>
                    <p>网站策划</p>
                </li>
            </ul>
            <button>下一步</button>
        </div>
    )
}

export default connect((step1) => ({ step1 }))(Step1);