import React, { Component } from 'react'

export default class LoginButton extends Component {
    render() {
        const { ...buttonSubmit } = this.props
        return(
            <div>
                <button {...buttonSubmit} >{this.props.title}</button>
            </div>
        )
    }
}