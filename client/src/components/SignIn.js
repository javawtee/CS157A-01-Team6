import React, { Component } from 'react'

const initialState = {
    userid: '',
    password: ''
}

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = e => { this.setState({ [e.target.name]: e.target.value }) }

    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center">
                <div className="uk-child-width-1-1">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input className="uk-input"
                            name="userid" onChange={this.handleChange} value={this.state.userid} placeholder="Email or M#" />
                    </div>
                </div>
                <div className="uk-margin uk-child-width-1-1">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: lock"></span>
                        <input className="uk-input" type="password"
                            name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                    </div>
                </div>
                <div className="uk-margin-small uk-child-width-1-1">
                    <button className="uk-button uk-button-primary uk-text-large">Sign In</button>
                </div>
                <div className="uk-margin-small uk-child-width-1-1 uk-text-right">
                    <a className="uk-text-small" href="#forgotPassword" uk-toggle="">Forgot password?</a>
                </div>
                <div className="uk-margin-small uk-child-width-1-3 uk-text-right">
                    <span>Not a member?</span>
                    <a className="uk-text-bold uk-margin-small-left" style={{ verticalAlign: "baseline" }} href="#signUp" uk-toggle="">
                        Enroll now
                    </a>
                </div>
                <div className="uk-margin-small-bottom uk-card-footer">
                    <small>CS157A-01 - TEAM 6</small>
                </div>
            </div>
        )
    }
}

export default SignIn
