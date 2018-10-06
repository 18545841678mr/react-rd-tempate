import React, {Component} from 'react'
import styles from './Icons.less'

class Icons extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    showSearch = () => {
        this.props.showSearch()
    }

    render() {
        return (
            <div className={styles.Icons}>
                { this.props.add ? <div className={styles.add} ></div> : '' } 
                { this.props.search ? <div className={styles.search} onClick={this.showSearch}></div> : ''}
                { this.props.back ? <div className={styles.back} ></div> : ''}
            </div>
        )
    }
}

export default Icons