/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './LoginStyle.css';
import Logo from './Logo';
import InputChild from './InputChild'
import LoginButton from './LoginButton';
import LoginOption from './LoginOption';

export default class LoginChild extends Component {
    render() {
        return(
            <div className={'divMain'}>
                <div className={'divCont'}>
                    <Logo logoStyle={this.props.logoStyle}/>   
                    <InputChild 
                        id="email"
                        value={this.props.email}
                        title={'E-mail address'}
                        type="text" 
                        placeholder="example@example.com"
                        onChange={this.props.handleChange} />

                    <InputChild 
                        id="password"
                        value={this.props.password}
                        title={'Password'}
                        type="password" 
                        placeholder="your password..."
                        onChange={this.props.handleChange} />  

                    <p className="err-message">
                        {this.props.errMessage}
                    </p>   

                    <LoginButton 
                        id="login"
                        title={'SIGN IN'}
                        onClick={this.props.submit} />

                    <LoginOption 
                        id="forgot"
                        title={'Forgot password?'} />

                    <LoginOption 
                        id="create"
                        title={'Create a new account'} />

                </div>
            </div>
        )
    }
}
