import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { validateStrongPassword } from 'utils/validators';
import PasswordField from "components/PasswordField"

export default function UpdatePassword() {
    const dispatch = useDispatch()
    const { ID } = useSelector(state => ({ ID: state.user.info.ID }))

    const [inputs, setInputs] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' })
    const [valids, setValids] = useState({ currentPassword: true, newPassword: true, confirmNewPassword: true })

    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        setValids({ ...valids, [e.target.name]: true })
    }

    const handleOnFocusPassword = e => {
        setInputs({ ...inputs, newPassword: '', confirmNewPassword: '' })
        setValids({ ...valids, newPassword: true, confirmNewPassword: true })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { currentPassword, newPassword, confirmNewPassword } = inputs
        let validcurrentPassword = currentPassword.length > 5
        let validPassword = newPassword.length > 5 && validateStrongPassword(newPassword)
        let validconfirmPassword = confirmNewPassword.length > 5 && confirmNewPassword === newPassword
        if (!validcurrentPassword || !validPassword || !validconfirmPassword) {
            return setValids({ currentPassword: validcurrentPassword, newPassword: validPassword, confirmNewPassword: validconfirmPassword })
        }

        dispatch({ type: "UPDATE_PASSWORD", payload: { ID, currentPassword, newPassword } })
        setInputs({ currentPassword: '', newPassword: '', confirmNewPassword: '' })
        setValids({ currentPassword: true, newPassword: true, confirmNewPassword: true })
    }

    return (
        <li className='uk-width-1-1'>
            <a className='uk-accordion-title uk-text-small uk-text-bold' href='#update-password'>
                <h4>User Password</h4>
            </a>
            <div className='uk-accordion-content' uk-grid="">
                <form onSubmit={handleSubmit}>
                    <div className='uk-margin-small-top uk-width-1-1 uk-padding-remove uk-margin-remove-top'>
                        <div className="uk-margin-auto-left uk-margin-remove-left@s uk-padding-small uk-width-1-4@s" uk-grid="">
                            <div className="uk-width-1-1">
                                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Current Password</label>
                                <input
                                    name="currentPassword"
                                    className={`uk-input ${valids.currentPassword ? "" : "uk-form-danger"}`}
                                    type="password"
                                    placeholder="Current Password"
                                    value={inputs.currentPassword}
                                    onChange={handleChange}
                                />
                                <small style={{ color: "red", display: valids.currentPassword ? "none" : "" }}>Password is not valid</small>
                            </div>
                            <PasswordField
                                passwordId="newPassword"
                                passwordValue={inputs.newPassword}
                                isValidPassword={valids.newPassword}
                                confirmPasswordId="confirmNewPassword"
                                isValidConfirmPassword={valids.confirmNewPassword}
                                confirmPasswordValue={inputs.confirmNewPassword}
                                onChange={handleChange}
                                onFocus={handleOnFocusPassword}
                            />
                        </div>
                    </div>
                    <div className='uk-margin-small-top uk-width-1-1'>
                        <button
                            className="uk-button uk-button-primary"
                            type="submit"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </li >
    )
}
