import React, {Component} from 'react'
import {connect} from 'dva'
import {Button, Icon, Input, Select, Timeline, message, DatePicker, Radio} from 'antd'
import styles from './index.less'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePass = this.handlePass.bind(this);
    }
    handleSubmit () {
        console.log(this.state.username, "&&&&&&&&&", this.state.password);
        console.log(this.context)
        this.props.history.push('/step1');
        
    }
    handleName (e) {
        this.setState({username: e.target.value});
    }
    handlePass (e) {
        this.setState({password: e.target.value});
    }
    render() {
        return (<div className={ styles.login }>
            <div className={ styles.leftItem }></div>
            <div className={ styles.rightItem }>
                <div className={ styles.center }>
                <h1>售前项目管理系统</h1>
                        <label>
                            账户<br/>
                            <input type="text" value={ this.state.username } onChange={ this.handleName } placeholder='请输入用户名'/>
                        </label><br/>
                        <label>
                            密码<br/>
                            <input type="password" value={ this.state.password } onChange={ this.handlePass } placeholder='请输入密码'/>
                        </label><br/>
                        <div className={ styles.button } onClick={ this.handleSubmit }>登录</div>
                </div>
            </div>
        </div>)
    }
}

export default Login;