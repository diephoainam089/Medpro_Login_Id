import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact'
export default class index extends Component {
  click = () => {
    this.props.onclick()
  }
  render () {

    const { color, classname, child } = this.props
    return (
      <MDBBtn
        color={color}
        className={classname}
        onClick={this.click}
      >
        {child}
      </MDBBtn>
    )
  }
}
