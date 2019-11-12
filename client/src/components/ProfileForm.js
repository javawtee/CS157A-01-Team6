import React, { Component } from 'react'
import UIkit from "uikit"
import ChangePasswprd from '../components/ChangePassword'

const initialState = {
    firstName: 'FirstName',
    middleInitial: 'middle',
    lastName: 'LastName',
    Email: 'email@email.com',
    Password: '123456',
    Perefence: '',
    validsignupPassword: true,
    validconfirmPassword: true,
}

export default class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    changePassword = e => {
    //   <ChangePasswprd/>
    }

    render() {
        UIkit.util.on(document, 'beforeshow', '#profile', () => this.setState(initialState))
        return (
                        <tb className="uk-form-stacked uk-grid-small" uk-grid="">
                            <div className="uk-width-3-5 uk-width-4-5@m">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    First Name : {this.state.firstName}</label>
                            </div>

                            <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    middleInitial : {this.state.middleInitial}</label>
                            </div>

                            <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    Last Name : {this.state.lastName}</label>
                            </div>

                            <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    Email : {this.state.Email}</label>
                            </div>

                            <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    Password : {this.state.Password}</label>
                            </div>

                            <div className="uk-width-1-1">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">
                                    User Perefence : {this.state.Perefence}</label>
                            </div>

                            <div className="uk-margin-small uk-child-width uk-text-right">
                                <button class="uk-button uk-button-default uk-button-large" 
                                onClick={this.changePassword}>Change Password</button>
                            </div>
                        </tb>
        )
    }
}

