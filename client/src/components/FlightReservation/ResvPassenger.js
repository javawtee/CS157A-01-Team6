import React from 'react';
import { generateOptions } from 'utils/generators'
import IDTypeOptions from 'models/IDTypeOptions'

export default function ResvPassenger(props) {
    var { id, form, onChange, onRemove } = props

    const handleCheckBox = e => {
        e.target.value = e.target.checked ? "yes" : "no"
        onChange(e)
    }

    return (
        <div
            className="uk-margin-small-bottom uk-margin-remove-top
                        uk-card uk-card-default"
            key={id}
            uk-grid="">
            <div className="uk-width-1-1 uk-flex uk-flex-right uk-padding-remove">
                <button className="uk-button"
                    uk-icon="icon: close; ratio: 2"
                    uk-tooltip="Remove passenger"
                    onClick={id => onRemove(id)}
                >
                </button>
            </div>
            <div className="uk-width-1-1 uk-padding-remove" uk-grid="">
                <div className="uk-width-1-3@s">
                    <small>First Name</small>
                    <input className="uk-input uk-form-small" id={id} name="firstName" value={form.firstName}
                        onChange={onChange} />
                </div>
                <div className="uk-width-1-3@s">
                    <small>Last Name</small>
                    <input className="uk-input uk-form-small" id={id} name="lastName" value={form.lastName}
                        onChange={onChange} />
                </div>
                <div className="uk-width-1-3 uk-width-1-6@s">
                    <small>Middle Initial</small>
                    <input className="uk-input uk-form-small" maxLength={1}
                        id={id} name="middleInitial" value={form.middleInitial}
                        onChange={onChange} />
                </div>
            </div>
            <div className="uk-width-1-1 uk-padding-remove" uk-grid="">
                <div className="uk-width-1-6@s">
                    <small>ID Type</small>
                    {generateOptions('uk-select uk-form-small', onChange, form.IDType, IDTypeOptions, {id, name: "IDType"})}
                </div>
                <div className="uk-width-1-4@s">
                    <small>ID Number</small>
                    <input className="uk-input uk-form-small" id={id} name="IDNumber" value={form.IDNumber}
                        onChange={onChange} autoComplete="off"/>
                </div>
            </div>
            <div className="uk-width-1-1 uk-padding-remove" uk-grid="">
                <div className="uk-width-1-3@s">
                    <small>Email (optional)</small>
                    <input className="uk-input uk-form-small" id={id} name="email" value={form.email}
                        onChange={onChange} />
                </div>
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
        </div>
    )
}
