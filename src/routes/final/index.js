import React, {Component} from 'react'
import { connect } from 'dva'
import { Input, Button, Upload, Modal, Icon } from 'antd'
import styles from './index.less'
import { Header, Search, Icons } from '../../components'

class Final extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCheckedCompony: true,
            isCheckedSale: false,
            jobList: [{text: '计算机服务和软件', flag: false},
                        {text: '贸易和零售', flag: false},
                        {text: '政府机构', flag: false},
                        {text: '制造', flag: false},
                        {text: '建筑', flag: false},
                        {text: '金融', flag: false},
                        {text: '教育', flag: false},
                        {text: '医疗', flag: false},
                        {text: '建筑业', flag: false}],
            colorList: [{color: '红', val: false},
                        {color: '蓝', val: false},
                        {color: '绿', val: false},
                        {color: '灰', val: false}],
            src: '',
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
        this.selectJob = this.selectJob.bind(this);
        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this)
    }

    selectJob (index, e) {
        let jobList = this.state.jobList;
         for (let i = 0; i < jobList.length; i ++ ) {
             if (index === i) {
                 jobList[i].flag =  true;
             } else {
                jobList[i].flag = false;                
             }
        }
        this.setState({
            jobList
        })
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    showSearch() {
        this.setState({showSearch: true})
    }
    closeSearch() {
        this.setState({showSearch: false})
    }
    render () {

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        return (
            <div>
                {
                    this.state.showSearch ? <Search closeSearch={this.closeSearch} ></Search> : ''
                }
                <Icons showSearch={this.showSearch} add='true' search='true' back='true' ></Icons>
                <Header title="案例库"></Header>
                <div className={ styles.wrap }>
                    <div className={styles.container}>
                        <div className={styles.title}>新增案例</div>
                        <div className={styles.siteInfo}>
                            <div className={styles.formItem}>
                                <label>网站名称</label>
                                <Input placeholder='请输入网站名称' />
                            </div>
                            <div className={styles.formItem}>
                                <label>网站域名</label>
                                <Input placeholder='请输入网站域名' />
                            </div>
                        </div>
                        <div className={ styles.siteType }>
                            <label>网站类型</label>
                            <div className={ `${styles.compony} ${this.state.isCheckedCompony ? styles.checked  : null}` }  onClick={() => {this.setState({isCheckedCompony: true, isCheckedSale: false})}} >企业网站</div>
                            <div className={ `${styles.sale} ${this.state.isCheckedSale ? styles.checked : null}` } onClick={() => {this.setState({isCheckedCompony: false, isCheckedSale: true})}} >营销型网站</div>
                        </div>
                        <div className={styles.jobs}>
                            <label>所属行业</label>
                            <div className={styles.jobList}>
                                {
                                    this.state.jobList.map( (item, index) => {
                                        return (
                                            <div className={ `${styles.job} ${item.flag ? styles.checked : null}` } key={index} onClick={(e) => this.selectJob(index, e)} >{item.text}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={ styles.colors }>
                            <label>颜色划分</label>
                            <div className={styles.colorList}>
                                {
                                    this.state.colorList.map( (item, index) => {
                                        return (
                                            <div className={ `${styles.color} ${item.val ? styles.selected : null}` } key={index} ></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={ styles.upload }>
                            <label>封面图</label>
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                    <div className={styles.bottomBtn}>
                        <Button className={ styles.save }>保存</Button>
                        <Button className={ styles.cancel }>取消</Button>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect((Final) => ({ Final }))(Final);