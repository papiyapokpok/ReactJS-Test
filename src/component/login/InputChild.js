import React, { Component } from 'react';
import './LoginStyle.css'

export default class InputChild extends Component {
    render() {
        const { ...res } = this.props
        return(
            <div>
                <div>
                    <label className="label" {...res}>{this.props.title}</label>
                </div>
                <div>
                    <input {...res} /> 
                </div>
                <br />
            </div>
        )
    }
}