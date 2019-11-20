import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { generateOptions } from 'utils/generators';
import converter from "utils/converter"
import flightTimeOptions from 'models/flightTimeOptions';
import flightClassOptions from 'models/flightClassOptions';
import sortByOptions from 'models/sortByOptions';

export default function UserPreference() {
    const dispatch = useDispatch()
    const { departTime, arriveTime, flightClass, maxPrice, sortBy, DEFAULT_MAX_PRICE } =
        useSelector(state => ({
            departTime: state.user.preference.departTime,
            arriveTime: state.user.preference.arriveTime,
            flightClass: state.user.preference.flightClass,
            maxPrice: state.user.preference.maxPrice,
            sortBy: state.user.preference.sortBy,
            DEFAULT_MAX_PRICE: state.user.DEFAULT_MAX_PRICE,
        }))

    const [flightTimeInputs, setFlightTimeInputs] = useState({ fromOption: departTime, toOption: arriveTime })
    const [flightClassInput, setFlightClassInput] = useState(flightClass)
    const [maxPriceInput, setMaxPrice] = useState(+maxPrice)
    const [sortByInput, setSortByInput] = useState(sortBy)

    const handleSelectFlightTimeOption = e => setFlightTimeInputs({ ...flightTimeInputs, [e.target.name]: e.target.value })

    const handleSelectFlightClassOption = e => setFlightClassInput(e.target.value)

    const handleSetMaxPrice = e => setMaxPrice(+e.target.value)

    const handleSelectSortByOption = e => setSortByInput(e.target.value)

    const handleSave = e => {
        dispatch({
            type: 'UPDATE_PREFERENCE',
            payload: {
                departTimeId: converter.optionTextToId(flightTimeOptions, flightTimeInputs.fromOption),
                arriveTimeId: converter.optionTextToId(flightTimeOptions, flightTimeInputs.toOption),
                flightClassId: converter.optionTextToId(flightClassOptions, flightClassInput),
                maxPrice: maxPriceInput,
                sortById: converter.optionTextToId(sortByOptions, sortByInput),
            }
        })
    }

    return (
        <li className='uk-width-1-1'>
            <a className='uk-accordion-title uk-text-small uk-text-bold' href='#preference'>
                <h4>User Preference</h4>
            </a>
            <div className='uk-accordion-content' uk-grid="">
                <div className='uk-margin-small-top uk-width-1-1'>
                    <small>Depart time</small><br />
                    {generateOptions('uk-select uk-form-small uk-width-1-6@s', handleSelectFlightTimeOption,
                        flightTimeInputs.fromOption, flightTimeOptions, { name: "fromOption" })}
                </div>
                <div className='uk-margin-small-top uk-width-1-1'>
                    <small>Arrive time</small><br />
                    {generateOptions('uk-select uk-form-small uk-width-1-6@s', handleSelectFlightTimeOption,
                        flightTimeInputs.toOption, flightTimeOptions, { name: "toOption" })}
                </div>
                <div className='uk-margin-small-top uk-width-1-1'>
                    <small>Flight class</small><br />
                    {generateOptions('uk-select uk-form-small uk-width-1-6@s', handleSelectFlightClassOption, flightClassInput, flightClassOptions)}
                </div>
                <div className='uk-margin-small-top uk-width-1-1'>
                    <small>Max price: {maxPriceInput === DEFAULT_MAX_PRICE ? "Any" : maxPriceInput} </small><br />
                    <input
                        className='uk-range uk-width-1-6@s'
                        type='range' min='50' max={DEFAULT_MAX_PRICE} step='50'
                        value={maxPriceInput} onChange={handleSetMaxPrice}
                    />
                </div>
                <div className='uk-margin-small-top uk-width-1-1'>
                    <small>Sort by</small><br />
                    {generateOptions('uk-select uk-form-small uk-width-1-6@s', handleSelectSortByOption, sortByInput, sortByOptions)}
                </div>
                <div className='uk-margin-small-top uk-width-1-1'>
                    <button
                        className="uk-button uk-button-primary"
                        onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </li>
    )
}
