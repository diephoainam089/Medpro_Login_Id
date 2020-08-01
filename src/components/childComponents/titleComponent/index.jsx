import React, { Component } from 'react'
import {MDBBox, MDBIcon} from 'mdbreact'
export default class index extends Component {
    render() {
        const {color, child, size, classname ,icon} = this.props
        return <MDBBox tag='p' className={`${classname}`} style={{color: `${color}`, fontSize:`${size}`}}>{icon !== '' ? <MDBIcon className='customFont pr-1' icon={icon} size="lg"/> : null}{child}</MDBBox>
    }
}
