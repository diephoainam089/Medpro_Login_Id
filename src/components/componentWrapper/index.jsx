import React, { Component } from 'react'
import {
  MDBBox,
  MDBBtn,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCollapseHeader,
  MDBCollapse,
  MDBCardBody,
  MDBIcon
} from 'mdbreact'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './index.css'
import VerifyOTPCpn from '../childComponents/OTPComponent'
import ButtonCpn from '../childComponents/btnComponent'
import LinkCpn from '../childComponents/linkComponent'
import TitleCpn from '../childComponents/titleComponent'
import SocialCpn from '../childComponents/socialComponent'
export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {
        phoneNum: '',
        pass: ''
      },
      otp: '',
      collapseID: 'collapse2'
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  onSubmitPhone = val => {
    let newVal = val

    this.setState(prev => ({ info: { ...prev.info, phoneNum: newVal } }))
  }
  onSubmitPass = e => {
    let newVal = e.target.value

    this.setState(prev => ({ info: { ...prev.info, pass: newVal } }))
  }

  handleChange = async otpCode => {
    let newVal = await otpCode

    this.setState({ ...this.state, otp: newVal }, () => {
      console.log(this.state.otp)
    })
  }

  toogleCollapse = id => () => {
    this.setState(prev => ({ collapseID: prev.collapseID !== id ? id : '' }))
  }

  render () {
    const { receiveStepVal, keyStep } = this.props
    const { collapseID } = this.state
    const custom = 'custom'
    return (
      <React.Fragment>
        <MDBRow>
          <MDBCol md='12'>
            <MDBBox display='flex' justifyContent='center'>
              <MDBBox style={{ width: '400px', paddingTop: '10%' }}>
                <TitleCpn
                  classname='h5 text-center mb-4'
                  color='#4285f4'
                  size='27px'
                  child={
                    keyStep === 1
                      ? 'Đăng nhập Medpro ID'
                      : 'Xác thực số điện thoại'
                  }
                  icon=''
                />

                {/* Phone/Pass input */}
                <MDBBox className='grey-text'>
                  <MDBBox className='pb-4'>
                    <input
                      type='text'
                      value='Diệp Hoài Nam'
                      disabled
                      name='username'
                      placeholder='Họ tên'
                      className={
                        keyStep === 2
                          ? `form-control form-control-md ${`${custom}Input`}`
                          : 'd-none'
                      }
                    />
                  </MDBBox>
                  <PhoneInput
                    placeholder='Nhập số điện thoại'
                    disabled={keyStep === 2 ? true : false}
                    country={'vn'}
                    name='phone'
                    // value={this.state.phone}
                    onChange={phone => this.onSubmitPhone(phone)}
                  />
                  <MDBBox>
                    <input
                      type='password'
                      value={this.state.info.pass}
                      disabled={keyStep === 2 ? true : false}
                      name='password'
                      placeholder='Nhập mật khẩu'
                      className={
                        keyStep === 2
                          ? 'd-none'
                          : `form-control form-control-md ${`${custom}Input`}`
                      }
                      onChange={this.onSubmitPass}
                    />
                  </MDBBox>
                </MDBBox>
                {/* End Phone/Pass input */}

                <MDBBox className='text-center'>
                  {/* OTP input */}
                  <MDBRow className={keyStep === 2 ? 'mt-5' : 'd-none'}>
                    <MDBCol md='12'>
                      <VerifyOTPCpn passOTP={val => this.handleChange(val)} />
                    </MDBCol>
                  </MDBRow>
                  {/* End OTP input */}

                  {/* Two buttons Register/SignIn */}
                  <MDBRow className='mt-5'>
                    <MDBCol md='6' className={keyStep === 2 ? 'd-none' : ''}>
                      <ButtonCpn
                        color='warning'
                        classname='customBtn'
                        child='Đăng kí'
                        onclick={() => receiveStepVal(1)}
                      />
                    </MDBCol>

                    <MDBCol md={keyStep === 2 ? '12' : '6'}>
                      <ButtonCpn
                        color='primary'
                        classname='customBtn'
                        child='Đăng nhập'
                        onclick={() => receiveStepVal(2)}
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* End Two buttons Register/SignIn */}
                </MDBBox>

                {/* Forgot pass button */}
                <MDBBox
                  className={keyStep === 1 ? 'text-center p-5' : 'd-none'}
                >
                  <LinkCpn
                    to='/forgot'
                    classname='Font'
                    child='Quên mật khẩu ?'
                  />
                </MDBBox>
                {/* End forgot pass button */}

                {/* Social button */}
                <MDBBox
                  className={keyStep === 1 ? 'text-center p-3' : 'd-none'}
                >
                  <TitleCpn
                    classname='text-center customFont'
                    color=''
                    size=''
                    child='Hoặc đăng nhập bằng tài khoản'
                    icon=''
                  />
                </MDBBox>
                <MDBBox>
                  <MDBRow className={keyStep === 1 ? 'pl-5 pr-5' : 'd-none'}>
                    <SocialCpn classname='fbIcon' icon='facebook-f' />
                    <SocialCpn classname='ggIcon' icon='google-plus-g' />
                  </MDBRow>
                </MDBBox>
                {/* End social button */}

                {/* get verifyCode again */}
                <MDBCard
                  className={
                    keyStep === 2 ? 'noneBoxShadow pt-5 pb-2' : 'd-none'
                  }
                >
                  <MDBBox
                    style={{ cursor: 'pointer' }}
                    className={`${custom}Font`}
                    onClick={this.toogleCollapse('collapseOpen')}
                  >
                    <MDBIcon
                      className={`${custom}Font pr-1`}
                      icon={
                        collapseID === 'collapseOpen'
                          ? 'angle-down'
                          : 'angle-right'
                      }
                    />
                    Bạn không nhận được mã xác nhận ?
                  </MDBBox>
                  <MDBCollapse id='collapseOpen' isOpen={collapseID}>
                    <MDBCardBody>
                      <TitleCpn
                        classname='font-weight-bold'
                        color='#4285f4'
                        size='15px'
                        child='Nếu bạn không nhận được mã:'
                        icon=''
                      />
                      <TitleCpn
                        classname='font-weight-bold'
                        color='#616161'
                        size='13px'
                        child='Xác nhận lại số điện thoại:'
                        icon='mobile-alt'
                      ></TitleCpn>
                      <TitleCpn
                        classname='font-weight-bold'
                        color='#616161'
                        size='13px'
                        child='Kiểm tra hộp thư SMS của bạn'
                        icon='sms'
                      ></TitleCpn>
                    </MDBCardBody>
                  </MDBCollapse>
                </MDBCard>
                <ButtonCpn
                  color='primary'
                  classname={keyStep === 2 ? 'customBtn btn-sm' : 'd-none'}
                  child='Gửi lại mã xác nhận'
                />
                {/* end get verifyCode again */}
              </MDBBox>
            </MDBBox>
          </MDBCol>
        </MDBRow>
      </React.Fragment>
    )
  }
}
