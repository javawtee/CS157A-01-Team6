import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import converter from "utils/converter"
import { generateOptions } from 'utils/generators'

//import flightTimeOptions from 'models/flightTimeOptions';
import sortByOptions from 'models/sortByOptions';
import FlightSummary from '../FlightSummary';

// props:
// type (Depart || Return) - required
// SELECTED_DATE - required
// SELECTED_FLIGHT_TIME_ID - required
// SELECTED_SORT_BY_ID_ID - required

export default function ResultHeader(props) {
    const { selected, TYPE, SELECTED_DATE, SELECTED_FLIGHT_TIME_ID, SELECTED_SORT_BY_ID } = props

    const getDepartKey = () => {
        return "flight" + (TYPE === "Depart" ? "From" : "To")
    }

    const getArriveKey = () => {
        return "flight" + (TYPE === "Depart" ? "To" : "From")
    }

    const { departFrom, arriveTo } = useSelector(state => ({
        departFrom: state.booking.searchInputs[getDepartKey()],
        arriveTo: state.booking.searchInputs[getArriveKey()]
    }))

    const [sortByInput, setSortByInput] = useState(converter.optionIdToText(sortByOptions, SELECTED_SORT_BY_ID))
    //const [flightTimeInput, setFlightTimeInput] = useState(converter.optionIdToText(flightTimeOptions, SELECTED_FLIGHT_TIME_ID))

    // TODO: sort flight by selected option
    const handleSelectSortByOption = e => {
        setSortByInput(e.target.value)
        props.handleSelectSortBy(e.target.value)
    }

    // TODO: sort flight by depart/arrive time (if respective sort by is selected)
    // const handleSelectFlightTimeOption = e => {
    //     setFlightTimeInput(e.target.value)
    // }

    return (
        <div id="flight-search-result" className="uk-grid-small uk-width-1-1 uk-margin-small-top uk-margin-small-bottom"
            style={{ backgroundColor: 'white' }} uk-grid=''>
            <FlightSummary
                TYPE={TYPE}
                DEPART_FROM={departFrom}
                ARRIVE_TO={arriveTo}
                SELECTED_DATE={SELECTED_DATE}
            />
            <hr className="uk-width-1-1 uk-margin-remove uk-padding-remove" />
            {
                !selected &&
                <div className="uk-margin-auto@s uk-margin-remove-top uk-width-1-1 uk-padding-small uk-padding-remove-top" uk-grid=''>
                    <div className="uk-width-1-3 uk-width-1-5@s">
                        <small>Sort By</small>
                        {generateOptions('uk-select uk-form-small', handleSelectSortByOption, sortByInput, sortByOptions)}
                    </div>
                    {/*
                        sortByInput.endsWith('Time') &&
                        <div className="uk-width-1-3 uk-width-1-5@m">
                            <small>Change Time</small>
                            {generateOptions('uk-select uk-form-small', handleSelectFlightTimeOption, flightTimeInput, flightTimeOptions)}
                        </div>
                    */}
                </div>
            }
        </div >
    )
}
