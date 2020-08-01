import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class index extends Component {
    render() {
        const custom = 'custom'
        const {to, classname, child} = this.props
        return <Link to={to} className={`${custom}${classname}`}>{child}</Link>
    }
}
