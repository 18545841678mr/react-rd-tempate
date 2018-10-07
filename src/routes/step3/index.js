import React from 'react'
import { connect } from 'dva'
import { Form,Radio, Select, Upload, Icon, Input, Button, Checkbox } from 'antd';

import styles from './index.less'
import iconCamera from '../../assets/icon-camera.png'

const RadioGroup = Radio.Group;
const Option = Select.Option;

const Step3 = () => {

    return (
        <div className={styles.wrap}>
            <Form>
                <div className={styles.design}>
                    <div className={styles.formHeader}>
                        <h3>设计</h3>
                    </div>
                    <div className={styles.formTop}>
                        <div className={styles.formItem}>
                            <label>企业VI</label>
                            <div className={styles.inputGroup}>
                                <RadioGroup>
                                    <Radio value={true}>有VI</Radio>
                                    <Radio value={false}>无VI</Radio>
                                </RadioGroup>
                                <div className={styles.colorGroup}>
                                    <input type='color' value='#ff0300'/>
                                    <input type='color' value='#4294ef'/>
                                    <input type='color' value='#00c553'/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formItem}>
                            <label>banner文案</label>
                            <div className={styles.inputGroup}>
                                <Select labelInValue placeholder='banner数量' style={{ width: 120 }}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                </Select>
                                <div className={styles.selectInput}>
                                    <Select labelInValue placeholder='banner1' style={{ width: 120, borderRadius: 'none', borderRadius: 'none' }}>
                                        <Option value="1">banner1</Option>
                                        <Option value="2">banner2</Option>
                                    </Select>
                                    <Input style={{ borderTopLeftRadius: 'none', borderBottomLeftRadius: 'none' }}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formItem}>
                            <label>参考网站</label>
                            <div className={styles.inputGroup}>
                                <RadioGroup>
                                    <Radio value={true}>有VI</Radio>
                                    <Radio value={false}>无VI</Radio>
                                </RadioGroup>
                                <div className={styles.uploadGroup}>
                                    <Input />
                                    <Upload style={{'marginLeft': 10}}>
                                        <img src={iconCamera}/>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formBottom}>
                        <div className={styles.formItem}>
                            <label>网站风格</label>
                            <Select placeholder='请选择网站风格'></Select>
                        </div>
                        <div className={styles.formItem}>
                            <label>网站类型</label>
                            <Select placeholder='请选择网站类型'></Select>
                        </div>
                        <div className={styles.formItem}>
                            <label>负责人电脑分辨率</label>
                            <Select placeholder='请选择联系人职位'></Select>
                        </div>
                        <div className={styles.formItem}>
                            <label>首页风格稿版数</label>
                            <Select placeholder='请选择首页风格稿版数'></Select>
                        </div>
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.formHeader}>
                        {/* <h3>网站框架</h3>
                        <div>
                            <span>当前选中</span>
                            <ul>
                                <li>公司新闻</li>
                            </ul>
                        </div>
                        <span>编辑</span> */}
                    </div>
                    <div className={styles.formTop}></div>
                    <div className={styles.formBottom}></div>
                </div>
            </Form>
        </div>
    )
}

export default connect((step3) => ({ step3 }))(Step3);