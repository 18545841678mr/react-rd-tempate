import React, {Component} from 'react';
import {Input} from 'antd';
import styles from './Search.less'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: false,
            content: ''
        }
        this.checked = this.checked.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.search = this.search.bind(this);
    }
    handleValue(e) {
        this.setState({content: e.target.value})
    }
    checked() {
        this.setState({input: !this.state.input})
    }
    search() {
        console.log(this.state.content);
    }

    closeSearch = () => {
        this.props.closeSearch()
    }

    render() {
        return (
            <div className={styles.search}>
                <div className={styles.close} onClick={this.closeSearch}></div>
                <div className={styles.inputItem}>
                    <label>Search</label>
                    <div className={styles.container}  >
                        <input value={this.state.content} onChange={ this.handleValue } onFocus={::this.checked} onBlur={::this.checked} />
                        <div className={ this.state.input ? styles.icon1 : styles.icon2 } onClick={this.search}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
