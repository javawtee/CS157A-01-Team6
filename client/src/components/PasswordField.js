import React from 'react'

export default function PasswordField(props) {
    let { passwordId, passwordValue,
        confirmPasswordId, confirmPasswordValue,
        isValidPassword, isValidConfirmPassword,
        onChange, onFocus } = props
    return (
        <React.Fragment>
            <div className="uk-width-1-1">
                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Password</label>
                <input id={passwordId} className={`uk-input ${isValidPassword ? '' : 'uk-form-danger'}`}
                    type="password" placeholder="Password"
                    name={passwordId} value={passwordValue}
                    onChange={onChange} onFocus={onFocus} />
                <small style={{ color: "red", display: isValidPassword ? "none" : "" }}>Password is too simple</small>
                <p style={{ marginTop: '1px' }}>
                    <small>* Password must have at least 6 characters</small><br />
                    <small>* Password should contain at least a letter or a number</small><br />
                    <small>* Password should contain a special character (!@#$%^&*)</small><br />
                </p>
            </div>
            <div className="uk-width-1-1">
                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Confirm password</label>
                <input id={confirmPasswordId} className={`uk-input ${isValidConfirmPassword ? '' : 'uk-form-danger'}`}
                    type="password" placeholder="Confirm password"
                    name={confirmPasswordId} value={confirmPasswordValue}
                    onChange={onChange} />
                <small style={{ color: "red", display: isValidConfirmPassword ? "none" : "" }}>Password is not matching</small>
            </div>
        </React.Fragment>
    )
}
