import React, { Component } from 'react'
import LoginChild from './LoginChild'
// import { Fetch } from 'react-request';
import request from 'superagent'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            logoStyle: 'logo-style-default',
            errMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.id === 'email') {
            this.setState({ email: event.target.value });
        } else if(event.target.id === 'password') { 
            this.setState({ password: event.target.value });
        }
    }

    submit = () => {
        //Loading run
        this.setState({
            logoStyle:  'logo-spin'
        })
        //Clear label
        this.setState({
            errMessage:''
        })
        const url = 'http://localhost:3000/api/login'  //URL API
        const email = this.state.email;    //Email value from State
        const password = this.state.password;   //Password value from State
        request
            .post(url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ email: email, password: password })
            .end((err, res) => {
            if(res) {
                //Close loading
                this.setState({
                    logoStyle:  'logo-style-default'
                })
                if (res.statusCode === 200) {
                    //Login Success
                    alert('Login Successed')
                } else {
                    //Login failed
                    this.setState({
                        errMessage: 'E-mail or password is incorrect'
                    })
                }
            }
        });  
    }

    render() {
        return(
            <div>
                <LoginChild 
                    submit={this.submit}
                    {...this.state}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}