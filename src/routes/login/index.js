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
    handleSubmit (e) {
        console.log(this.state.username, "&&&&&&&&&", this.state.password);
    }
    handleName (e) {
        this.setState({username: e.target.username});
    }
    handlePass (e) {
        this.setState({password: e.target.password});
    }
    render() {
        return (<div className="styles.login">
            <h1>售前项目管理系统</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    账户
                    <input type="text" value={this.state.username} onChange={this.handleName}/>
                </label>
                <label>
                    密码
                    <input type="password" value={this.state.password} onChange={this.handlePass}/>
                </label>
                <input className="button" type="submit" value="登录" />
            </form>
        </div>)
    }
}

export default Login;