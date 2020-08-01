import React, { Component } from 'react'
import { MDBCol, MDBIcon, MDBBtn } from 'mdbreact'
export default class index extends Component {
  render () {
    const { classname, icon, link } = this.props
    return (
      <MDBCol className='text-center' md='6'>
        <MDBBtn
          style={{ borderRadius: '10px' }}
          className={`${classname} pl-4 pr-4`}
          size='lg'
        >
          <MDBIcon fab icon={`${icon}`} />
        </MDBBtn>
      </MDBCol>
    )
  }
}
