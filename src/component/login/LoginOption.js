import React, { Component } from 'react'
import './LoginStyle.css'

export default class LoginOption extends Component {
    render() {
        const { ...res } = this.props
        return(
            <div>
                    <a {...res}>{this.props.title}</a>
            </div>
        )
    }
}