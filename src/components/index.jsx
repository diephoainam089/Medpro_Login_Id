import React, { Component } from 'react'
import { MDBContainer, MDBBox } from 'mdbreact'
import './index.css'
export default class index extends Component {
  render () {
      const {children} = this.props
    return (
      <MDBBox className='fullScreen'>
        <MDBContainer>
        {children}
        </MDBContainer>
      </MDBBox>
    )
  }
}
