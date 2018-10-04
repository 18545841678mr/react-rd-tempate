import React from 'react'
import { connect } from 'dva'
import { Input } from 'antd'

import styles from './index.less'

const Step2 = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <h1 className={styles.title}>基本信息</h1>
                <div className={styles.topForm}>
                    <div className={styles.formItem}>
                        <label>公司名称</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>项目名称（选填）</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>网站类型</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>企业所属行业</label>
                        <Input />
                    </div>
                    {/* @hack 布局 */}
                    <div className={`${styles.formItem} ${styles.flexHack}`}></div>
                </div>
                <div className={styles.bottomForm}>
                    <div className={styles.formItem}>
                        <label>联系人</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>联系人电话</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>联系人职位</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>建站初衷</label>
                        <Input />
                    </div>
                    <div className={styles.formItem}>
                        <label>联系邮箱</label>
                        <Input />
                    </div>
                    {/* @hack 布局 */}
                    <div className={`${styles.formItem} ${styles.flexHack}`}></div>
                </div>
            </div>
            <button>下一步</button>
        </div>
    )
}

export default connect((step2) => ({ step2 }))(Step2);