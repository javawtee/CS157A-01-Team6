import React, { Component } from 'react'
import UIkit from "uikit"
import { validateEmailFormat, validateStrongPassword } from 'utils/validators'

const initialState = {
    Password: '',
    confirmPassword: '',
    validPassword: true,
    validconfirmPassword: true,
}

export default class ChangePasswprd extends Component{

    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = e => {
        let removedWarnFrom = `valid${e.target.id}`
        this.setState({ [e.target.name]: e.target.value, [removedWarnFrom]: true })
    }

    handleSubmit = e => {
        e.preventDefault()
        let validPassword = this.state.Password.length > 5 && validateStrongPassword(this.state.Password)
        let validconfirmPassword = this.state.confirmPassword.length > 5 && this.state.confirmPassword === this.state.signupPassword
        if (!validPassword || !validconfirmPassword) {
            return this.setState({ 
                validPassword, 
                validconfirmPassword 
            })
        }
}
render() {
    UIkit.util.on(document, 'beforeshow', '#signUp', () => this.setState(initialState))
    return (
                    <form className="uk-form-stacked uk-grid-small" uk-grid="">
                        <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Password</label>
                            <input id="signupPassword" className={`uk-input ${this.state.validsignupPassword ? '' : 'uk-form-danger'}`} type="password" placeholder="Password"
                                name="signupPassword" onChange={this.handleChange} value={this.state.signupPassword} />
                            <small style={{ color: "red", display: this.state.validsignupPassword ? "none" : "" }}>Password is too simple</small>
                            <p style={{marginTop: '1px'}}>
                                <small>* Password must have at least 6 characters</small><br/>
                                <small>* Password must contain a letter or a number</small><br/>
                                <small>* Password must contain a special character (!@#$%^&*)</small><br/>
                            </p>
                        </div>
                        <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Confirm password</label>
                            <input id="confirmPassword" className={`uk-input ${this.state.validconfirmPassword ? '' : 'uk-form-danger'}`} type="password" placeholder="Confirm password"
                                name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} />
                            <small style={{ color: "red", display: this.state.validconfirmPassword ? "none" : "" }}>Password is not matching</small>
                        </div>
                    </form>
    )
}
}