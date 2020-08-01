import React, { Component } from 'react'
import InputOtp from 'react-input-otp'
import './index.css'
export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      otpCode: ''
    }
  }
  handleChange = otpCode => {
    this.setState({ otpCode }, () => {
      console.log(this.state)
      this.props.passOTP(this.state.otpCode)
    })
  }
  render () {
    return <InputOtp onChange={this.handleChange} />
  }
}
