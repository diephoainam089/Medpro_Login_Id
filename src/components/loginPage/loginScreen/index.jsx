import React, { Component } from 'react'
import { MDBBox, MDBRow, MDBCol } from 'mdbreact'
import Wrapper from '../../componentWrapper'
export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1
    }
  }
  setStep = val => {
    console.log(val)
    let newStep = val
    this.setState({ step: newStep }, () => {
      console.log(this.state.step)
    })
  }

  render () {
    switch (this.state.step) {
      case 1:
        return (
          <React.Fragment>
            <MDBBox tag='section' className=''>
              <MDBRow>
                <MDBCol md='6'>
                  <Wrapper
                    receiveStepVal={val => this.setStep(val)}
                    keyStep={this.state.step}
                  />
                </MDBCol>
                <MDBCol md='6' className='text-center'>
                  <p>Image</p>
                </MDBCol>
              </MDBRow>
            </MDBBox>
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <MDBBox tag='section' className=''>
              <MDBRow>
                <MDBCol md='6'>
                  <Wrapper
                    receiveStepVal={val => this.setStep(val)}
                    keyStep={this.state.step}
                  />
                </MDBCol>
                <MDBCol md='6' className='text-center'>
                  <p>Image</p>
                </MDBCol>
              </MDBRow>
            </MDBBox>
          </React.Fragment>
        )
      default:
        return (
          <React.Fragment>
            <MDBBox tag='section' className=''>
              <MDBRow>
                <MDBCol md='6'>
                  <Wrapper
                    receiveStepVal={val => this.setStep(val)}
                    keyStep={this.state.step}
                  />
                </MDBCol>
                <MDBCol md='6' className='text-center'>
                  <p>Image</p>
                </MDBCol>
              </MDBRow>
            </MDBBox>
          </React.Fragment>
        )
    }
  }
}
