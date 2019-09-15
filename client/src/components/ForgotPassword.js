import React, { Component } from 'react'
import UIkit from "uikit"

const initialState = {
    email: ''
}

export class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state = initialState
    }
    
    handleChange = e => this.setState({[e.target.name] : e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        // validate email format here
        alert("Send reset password to: " + this.state.email)
    }

    render() {
        UIkit.util.on(document, 'beforeshow', '#forgotPassword', () => this.setState(initialState))
        return (
            <div id="forgotPassword" className="uk-flex-top" style={{ zIndex: 5 }} uk-modal="bg-close: false">
                <div className="uk-modal-dialog uk-margin-auto-vertical">
                    <button className="uk-modal-close-default" uk-close=""></button>
                    <div class="uk-modal-header">
                        <h2 class="uk-modal-title">Easy to reset your password</h2>
                    </div>
                    <div className="uk-modal-body">
                        <input className="uk-input" type="text" placeholder="Enter your registered email"
                            name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-primary uk-margin-small-right" onClick={this.handleSubmit}>Submit</button>
                        <button className="uk-button uk-button-danger" uk-toggle="target: #forgotPassword">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
