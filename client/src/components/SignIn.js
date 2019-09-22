import React, { Component } from 'react'

const initialState = {
    userid: "",
    password: ""
}

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleOnFocus = e => {
        document.getElementById(e.target.id).className = "uk-input"
        if(e.target.id === "password") this.setState({password: ""})
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    clearForm = e => this.setState(initialState)

    submitSignIn = e => {
        e.preventDefault()
        let validUserId = this.state.userid.length > 0
        let validPassword = this.state.password.length > 0
        if (!validUserId || !validPassword) {
            document.getElementById("userid").className += " uk-form-danger"
            document.getElementById("password").className += " uk-form-danger"
            return
        }

        // TODO: call API
        alert(`User ID [${this.state.userid}] and password [${this.state.password}] are valid`)
    }

    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center">
                <form id="signInForm" className="uk-from-stacked" onSubmit={this.submitSignIn}>
                    <div className="uk-child-width-1-1">
                        <div className="uk-inline">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input id="userid" className="uk-input" onFocus={this.handleOnFocus}
                                name="userid" onChange={this.handleChange} value={this.state.userid} placeholder="Email" />
                        </div>
                    </div>
                    <div className="uk-margin uk-child-width-1-1">
                        <div className="uk-inline uk-form-password">
                            <span className="uk-form-icon" uk-icon="icon: lock"></span>
                            <input id="password" className="uk-input" type="password" onFocus={this.handleOnFocus}
                                name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                        </div>
                    </div>
                    <div className="uk-margin-small uk-child-width-1-1">
                        <button className="uk-button uk-button-primary uk-text-large">Sign In</button>
                    </div>
                </form>
                <div className="uk-margin-small uk-child-width-1-1 uk-text-right">
                    <a className="uk-text-small" href="#forgotPassword" uk-toggle=""
                        onClick={this.clearForm}>
                        Forgot password?
                    </a>
                </div>
                <div className="uk-margin-small uk-child-width-1-3 uk-text-right">
                    <span>Not a member?</span>
                    <a className="uk-text-bold uk-margin-small-left" style={{ verticalAlign: "baseline" }} href="#signUp" uk-toggle=""
                        onClick={this.clearForm}>
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
