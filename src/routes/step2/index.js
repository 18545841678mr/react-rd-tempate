import React from 'react'
import { connect } from 'dva'
import { Input, Select } from 'antd'

import styles from './index.less'

const Option = Select.Option;
const TextArea = Input.TextArea;
const siteTypes = [];
for (let i = 10; i < 13; i++) {
    siteTypes.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Step2 = () => {
    // handleChange() {

    // }
    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <h1 className={styles.title}>基本信息</h1>
                <div className={styles.topForm}>
                    <div className={styles.formItem}>
                        <label>公司名称</label>
                        <Input placeholder='请输入公司名称'/>
                    </div>
                    <div className={styles.formItem}>
                        <label>项目名称（选填）</label>
                        <Input placeholder='请输入项目名称'/>
                    </div>
                    <div className={styles.formItem}>
                        <label>请选择网站类型</label>
                        <Select 
                            mode='multiple'
                            showArrow={true}
                            style={{width: '100%'}}
                            notFoundContent='未找到匹配结果'
                            placeholder='请选择网站类型'
                        >
                            { siteTypes }   
                        </Select>
                    </div>
                    <div className={styles.formItem}>
                        <label>企业所属行业</label>
                        <Input placeholder='请输入企业所属行业'/>
                    </div>
                    {/* @hack 布局 */}
                    <div className={`${styles.formItem} ${styles.flexHack}`}></div>
                </div>
                <div className={styles.bottomForm}>
                    <div className={styles.formItem}>
                        <label>联系人</label>
                        <Input placeholder='请输入联系人姓名'/>
                    </div>
                    <div className={styles.formItem}>
                        <label>联系人电话</label>
                        <Input placeholder='请输入联系人电话'/>
                    </div>
                    <div className={styles.formItem}>
                        <label>联系人职位</label>
                        <Input placeholder='请输入联系人职位'/>
                    </div>
                    <div className={styles.formItem}>
                        <label>建站初衷</label>
                        <TextArea 
                            placeholder='请简要叙述客户建立网站的目的'
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>联系邮箱</label>
                        <Input placeholder='请输入联系人邮箱' />
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