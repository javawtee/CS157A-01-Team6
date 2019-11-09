import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { generateOptions } from 'utils/generators'
//testing purpose
import flightTimeOptions from 'models/flightTimeOptions';
import sortByOptions from 'models/sortByOptions';
import FlightSummary from '../FlightSummary';

// props:
// type (Depart || Return) - required
// SELECTED_DATE - required
// SELECTED_FLIGHT_TIME - required
// SELECTED_SORT_BY - required

export default function ResultHeader(props) {
    const { TYPE, SELECTED_DATE, SELECTED_FLIGHT_TIME, SELECTED_SORT_BY } = props

    const [date, setDate] = useState(SELECTED_DATE)
    const [sortByInput, setSortByInput] = useState(SELECTED_SORT_BY)
    const [flightTimeInput, setFlightTimeInput] = useState(SELECTED_FLIGHT_TIME)

    // TODO: fetch flights for selected date
    const handleDateChange = newDate => setDate(newDate)

    // TODO: sort flight by selected option
    const handleSelectSortByOption = e => setSortByInput(e.target.value)

    // TODO: sort flight by depart/arrive time (if respective sort by is selected)
    const handleSelectFlightTimeOption = e => setFlightTimeInput(e.target.value)

    return (
        <div id="flight-search-result" className="uk-margin-auto uk-grid-small" uk-grid=''>
            <FlightSummary />
            <hr className="uk-width-1-1" />
            <div className="uk-margin-auto@s uk-margin-remove-bottomuk-width-1-1 uk-padding-small" uk-grid=''>
                <div className="uk-width-1-3 uk-width-1-5@m">
                    <small>Change Date</small> <br />
                    <DatePicker className='uk-input uk-form-small' dateFormat='MM/dd'
                        minDate={new Date()} selected={date} onChange={handleDateChange} />
                </div>
                <div className="uk-width-1-3 uk-width-1-5@s">
                    <small>Sort By</small>
                    {generateOptions('uk-select uk-form-small', handleSelectSortByOption, sortByInput, sortByOptions)}
                </div>
                {
                    sortByInput.endsWith('Time') &&
                    <div className="uk-width-1-3 uk-width-1-5@m">
                        <small>Change Time</small>
                        {generateOptions('uk-select uk-form-small', handleSelectFlightTimeOption, flightTimeInput, flightTimeOptions)}
                    </div>
                }
            </div>
        </div >
    )
}
