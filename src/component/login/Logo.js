/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import logo from '../asset/logo.png'

export default class Logo extends Component {
    render() {
        return(
            <div>
                <img src={logo} className={this.props.logoStyle} />
            </div>
        )
    }
}