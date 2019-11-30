import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { validateStrongPassword } from 'utils/validators';
import PasswordField from 'components/PasswordField';

export default function RecoveryPassword(props) {
    const dispatch = useDispatch()
    const { confirmed } = useSelector(state => ({ confirmed: state.user.confirmedRecoveryLink }))
    const link = props.match.params.link

    const [status, setStatus] = useState(false)
    const [inputs, setInputs] = useState({ newPassword: '', confirmNewPassword: '' })
    const [valids, setValids] = useState({ newPassword: true, confirmNewPassword: true })

    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        setValids({ ...valids, [e.target.name]: true })
    }

    const handleOnFocusPassword = e => {
        setInputs({ newPassword: '', confirmNewPassword: '' })
        setValids({ newPassword: true, confirmNewPassword: true })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { newPassword, confirmNewPassword } = inputs
        let validPassword = newPassword.length > 5 && validateStrongPassword(newPassword)
        let validconfirmPassword = confirmNewPassword.length > 5 && confirmNewPassword === newPassword
        if (!validPassword || !validconfirmPassword) {
            return setValids({ newPassword: validPassword, confirmNewPassword: validconfirmPassword })
        }

        dispatch({ type: "UPDATE_PASSWORD", payload: { link, newPassword } })
    }

    useEffect(() => {
        if (confirmed) {
            setStatus(true)
        } else {
            dispatch({ type: "CONFIRM_RECOVERY_LINK", link })
        }
    }, [confirmed])

    return (
        <div className="uk-margin-auto uk-width-1-3@s uk-padding-small" onSubmit={handleSubmit}>
            {
                status &&
                <form>
                    <h3>Enter new password</h3>
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
                    <div className="uk-margin-small-top uk-width-1-1 uk-flex uk-flex-right">
                        <button className="uk-button uk-button-default" type="submit">Submit</button>
                    </div>
                </form>
            }
        </div>
    )
}
