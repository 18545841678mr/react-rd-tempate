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
                        <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#8a8a8a" d="M793.6 972.8a25.4464 25.4464 0 0 1-12.2368-3.1232L512 822.784l-269.3632 146.8928a25.5488 25.5488 0 0 1-37.4784-26.7264l49.0496-294.1952-195.4816-195.4816a25.6512 25.6512 0 0 1 13.8752-43.3664l294.3488-49.0496 122.1632-244.3264a25.6 25.6 0 0 1 45.7728 0l122.1632 244.3264 294.3488 49.0496a25.6 25.6 0 0 1 13.8752 43.3664l-195.4816 195.4816 49.0496 294.1952A25.7536 25.7536 0 0 1 793.6 972.8zM512 768c4.1984 0 8.448 1.024 12.2368 3.1232l235.4688 128.4096-42.5472-255.3344a25.4464 25.4464 0 0 1 7.168-22.3232l169.6256-169.6256-258.1504-43.008a25.6 25.6 0 0 1-18.688-13.824L512 185.1904 406.8864 395.4176a25.7536 25.7536 0 0 1-18.688 13.824l-258.1504 43.008 169.6256 169.6256a25.7024 25.7024 0 0 1 7.168 22.3232l-42.5472 255.3344 235.4688-128.4096A25.4464 25.4464 0 0 1 512 768z"  /></svg>
                </div>
            </div>
        </div>)
    }
}

export default Login;