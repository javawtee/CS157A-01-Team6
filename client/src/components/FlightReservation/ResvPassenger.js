import React, { useState } from 'react';
import { generateOptions } from 'utils/generators'
import IDTypeOptions from 'models/IDTypeOptions'

export default function ResvPassenger(props) {
    var { id, form, onChange, onRemove } = props
    const [sendConfirmation, setSendConfirmation] = useState(false)

    const handleCheckBox = e => {
        e.target.value = e.target.checked ? "yes" : "no"
        setSendConfirmation(e.target.checked)
        onChange(e)
    }

    return (
        <div
            className="uk-margin-small-bottom uk-margin-remove-top
                        uk-card uk-card-default"
            key={id}
            uk-grid="">
            <div className="uk-width-1-1 uk-flex uk-flex-wrap uk-flex-wrap-around uk-padding-remove uk-margin-remove-bottom">
                <span className="uk-width-1-2"><h4>Passenger {id + 1}</h4></span>
                <span className="uk-width-1-2 uk-flex uk-flex-right">
                    <button className="uk-button"
                        uk-icon="icon: close; ratio: 1"
                        uk-tooltip="Remove passenger"
                        onClick={id => onRemove(id)}
                    >
                    </button>
                </span>
            </div>
            <div className="uk-width-1-1 uk-padding-remove uk-margin-remove" uk-grid="">
                <div className="uk-width-1-3@s">
                    <small>First Name</small>
                    <input id={id} name="firstName" value={form.firstName}
                        className={`uk-input uk-form-small ${form.validfirstName ? '' : 'uk-form-danger'}`}
                        onChange={onChange} />
                    <small style={{ color: "red", display: form.validfirstName ? "none" : "" }}>First name is too short</small>
                </div>
                <div className="uk-width-1-3@s">
                    <small>Last Name</small>
                    <input id={id} name="lastName" value={form.lastName}
                        className={`uk-input uk-form-small ${form.validlastName ? '' : 'uk-form-danger'}`}
                        onChange={onChange} />
                    <small style={{ color: "red", display: form.validlastName ? "none" : "" }}>Last name is too short</small>
                </div>
                <div className="uk-width-1-3 uk-width-1-6@s uk-margin-remove">
                    <small>Middle Initial</small>
                    <input maxLength={1}
                        className={`uk-input uk-form-small ${form.validmiddleInitial ? '' : 'uk-form-danger'}`}
                        id={id} name="middleInitial" value={form.middleInitial}
                        onChange={onChange} />
                    <small style={{ color: "red", display: form.validmiddleInitial ? "none" : "" }}>Alphabetics only</small>
                </div>
            </div>
            <div className="uk-width-1-1 uk-padding-remove uk-margin-remove" uk-grid="">
                <div className="uk-width-1-6@s">
                    <small>ID Type</small>
                    {generateOptions('uk-select uk-form-small', onChange, form.IDType, IDTypeOptions, {id, name: "IDType"})}
                </div>
                <div className="uk-width-1-4@s">
                    <small>ID Number</small>
                    <input id={id} name="IDNumber" value={form.IDNumber}
                        className={`uk-input uk-form-small ${form.validIDNumber ? '' : 'uk-form-danger'}`}
                        onChange={onChange} autoComplete="off" />
                    <small style={{ color: "red", display: form.validIDNumber ? "none" : "" }}>ID number is not valid</small>
                </div>
            </div>
            <div className="uk-width-1-1 uk-padding-remove uk-margin-remove" uk-grid="">
                <div className="uk-margin-auto-top uk-width-1-3@s">
                        <label>
                            <input className="uk-checkbox uk-margin-small-right" type="checkbox" 
                                id={id}
                                name="sendConfirmation"
                                onChange={handleCheckBox}/> 
                            <small>Send confirmation to email</small>
                        </label>
                </div>
            </div>
            {
                sendConfirmation &&
                <div className="uk-width-1-1 uk-padding-remove uk-margin-remove" uk-grid="">
                    <div className="uk-width-1-3@s">
                        <small>Email (optional)</small>
                        <input id={id} name="reservationEmail" value={form.reservationEmail}
                            className={`uk-input uk-form-small ${form.validreservationEmail ? '' : 'uk-form-danger'}`}
                            onChange={onChange}/>
                        <small style={{ color: "red", display: form.validreservationEmail ? "none" : "" }}>Email is not valid</small>
                    </div>
                </div>
            }
        </div>
    )
}
