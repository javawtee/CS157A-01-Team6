import React, { Component } from 'react'
import UIkit from "uikit"

const initialState = {
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
}

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        // validate email format here
        alert("Pending...")
    }

    render() {
        UIkit.util.on(document, 'beforeshow', '#signUp', () => this.setState(initialState))
        return (
            <div id="signUp" className="uk-flex-top" style={{ zIndex: 5 }} uk-modal="bg-close: false">
                <div className="uk-modal-dialog uk-margin-auto-vertical">
                    <button className="uk-modal-close-default" uk-close=""></button>
                    <div className="uk-modal-header">
                        <h2 class="uk-modal-title">Create Account</h2>
                    </div>
                    <div className="uk-modal-body">
                        <form className="uk-form-stacked">
                            <div>
                                <label class="uk-form-label" for="form-stacked-text">Email</label>
                                <input className="uk-input" type="text" placeholder="john.doe@domain.com"
                                    name="email" onChange={this.handleChange} value={this.state.email}/>
                            </div>
                            <div>
                                <label class="uk-form-label" for="form-stacked-text">Confirm email</label>
                                <input className="uk-input" type="text" placeholder="john.doe@domain.com"
                                    name="confirmEmail" onChange={this.handleChange} value={this.state.confirmEmail}/>
                            </div>
                            <div>
                                <label class="uk-form-label" for="form-stacked-text">Password</label>
                                <input className="uk-input" type="password" placeholder="Password"
                                    name="password" onChange={this.handleChange} value={this.state.password}/>
                            </div>
                            <div>
                                <label class="uk-form-label" for="form-stacked-text">Confirm password</label>
                                <input className="uk-input" type="password" placeholder="Confirm password"
                                    name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword}/>
                            </div>
                        </form>
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-primary uk-margin-small-right" onClick={this.handleSubmit}>Submit</button>
                        <button className="uk-button uk-button-danger" uk-toggle="target: #signUp">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
