import React, {Component} from 'react';
import UIkit from "./node_modules/uikit"
import { validateEmailFormat, validateStrongPassword } from './node_modules/utils/validators'

const initialState = {
    firstName: 'first name', //get from DB 
    middleInitial: '',
    lastName: 'last name',
    email: 'email',
    password: 'password',
    confirmEmail: '',
    confirmPassword: '',
    validfirstName: true,
    validmiddleInitial: true,
    validlastName: true,
    validsignupEmail: true,
    validconfirmEmail: true,
    validpassword: true,
    validconfirmPassword: true,
}

class Profile extends Component {
    
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
        let validfirstName = this.state.firstName.length > 1
        let validlastName = this.state.lastName.length > 1
        let validmiddleInitial = this.state.middleInitial.length === 0 || (this.state.middleInitial.length > 0 && isNaN(this.state.middleInitial))
        let validsignupEmail = this.state.signupEmail.length > 0 && validateEmailFormat(this.state.signupEmail)
        let validconfirmEmail = this.state.confirmEmail.length > 0 && this.state.confirmEmail === this.state.signupEmail
        let validpassword = this.state.password.length > 5 && validateStrongPassword(this.state.password)
        let validconfirmPassword = this.state.confirmPassword.length > 5 && this.state.confirmPassword === this.state.password
        if (!validfirstName || !validlastName || !validmiddleInitial || !validsignupEmail || !validconfirmEmail || !validpassword || !validconfirmPassword) {
            return this.setState({ 
                validfirstName, validlastName, validmiddleInitial, 
                validsignupEmail, validconfirmEmail, validpassword, 
                validconfirmPassword 
            })
        }

        // TODO: call API
        alert("Wrong input")
    }

    render() {
        UIkit.util.on(document, 'beforeshow', '#Profile', () => this.setState(initialState))
        return (
            <div id="Profile" className="uk-flex-top" style={{ zIndex: 5 }} uk-modal="bg-close: false">
                <div className="uk-modal-dialog uk-margin-auto-vertical">
                    <button className="uk-modal-close-default" uk-close=""></button>
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">Create Account</h2>
                    </div>
                    <div className="uk-modal-body">
                        <form className="uk-form-stacked uk-grid-small" uk-grid="">
                            <div className="uk-width-3-5 uk-width-4-5@m">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">First Name</label>
                                <input id="firstName" className={`uk-input ${this.state.validfirstName ? "" : "uk-form-danger"}`}
                                    type="text" placeholder="john"
                                    name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                                <small style={{ color: "red", display: this.state.validfirstName ? "none" : "" }}>First name is too short</small>
                            </div>
                            <div className="uk-width-2-5 uk-width-1-5@m">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Middle Initial</label>
                                <input id="middleInitial" className={`uk-input ${this.state.validmiddleInitial ? "" : "uk-form-danger"}`}
                                    type="text" maxLength={1}
                                    name="middleInitial" onChange={this.handleChange} value={this.state.middleInitial} />
                                <small style={{ color: "red", display: this.state.validmiddleInitial ? "none" : "" }}>Alphabetics only</small>
                            </div>
                            <div className="uk-width-1-1">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Last Name</label>
                                <input id="lastName" className={`uk-input ${this.state.validlastName ? "" : "uk-form-danger"}`}
                                    type="text" placeholder="doe"
                                    name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                                <small style={{ color: "red", display: this.state.validlastName ? "none" : "" }}>Last name is too short</small>
                            </div>
                            <div className="uk-width-1-1">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Email</label>
                                <input id="signupEmail" className={`uk-input ${this.state.validsignupEmail ? '' : 'uk-form-danger'}`} type="text" placeholder="john.doe@domain.com"
                                    name="signupEmail" onChange={this.handleChange} value={this.state.signupEmail} />
                                <small style={{ color: "red", display: this.state.validsignupEmail ? "none" : "" }}>Email is not valid</small>
                            </div>
                            <div className="uk-width-1-1">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Confirm Email</label>
                                <input id="confirmEmail" className={`uk-input ${this.state.validconfirmEmail ? '' : 'uk-form-danger'}`} type="text" placeholder="john.doe@domain.com"
                                    name="confirmEmail" onChange={this.handleChange} value={this.state.confirmEmail} />
                                <small style={{ color: "red", display: this.state.validconfirmEmail ? "none" : "" }}>Email is not matching</small>
                            </div>
                            <div className="uk-width-1-1">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Password</label>
                                <input id="password" className={`uk-input ${this.state.validpassword ? '' : 'uk-form-danger'}`} type="password" placeholder="Password"
                                    name="password" onChange={this.handleChange} value={this.state.password} />
                                <small style={{ color: "red", display: this.state.validpassword ? "none" : "" }}>Password is too simple</small>
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
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-primary uk-margin-small-right" onClick={this.handleSubmit}>Submit</button>
                        <button className="uk-button uk-button-danger" uk-toggle="target: #Profile">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;