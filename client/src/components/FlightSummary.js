import React from 'react';
import { useDispatch } from 'react-redux'
import { format } from 'date-fns';
import { getTimeIn12HourFormat } from 'utils/datetime'

// props:
// type (Depart || Return) - required
// SELECTED_DATE - required
// FLIGHT_TIME - optional

export default function FlightSummary(props) {
    const dispatch = useDispatch()
    const { TYPE, DEPART_FROM, ARRIVE_TO, SELECTED_DATE, FLIGHT_TIME } = props
    return (
        <div className="uk-margin-auto@s uk-width-1-1" uk-grid=''>
            <div className="uk-width-1-1 uk-text-large uk-text-bold uk-padding-remove">
                {TYPE} Flight
            </div>
            <div className="uk-width-1-3@s uk-padding-remove">
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {DEPART_FROM} <span uk-icon="icon: arrow-right"></span> {ARRIVE_TO}
                </span>
                <br />
                <button
                    className="uk-button uk-button-link uk-text-capitalize"
                    onClick={() => dispatch({ type: "BOOKING_GO_SEARCH" })}
                >
                    Modify
                </button>
            </div>
            <div className="uk-width-1-3@s uk-padding-remove">
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {format(SELECTED_DATE, "iiii MMM dd, yyyy")} <br />
                    {
                        FLIGHT_TIME && FLIGHT_TIME.length === 2 &&
                        <React.Fragment>
                            {getTimeIn12HourFormat(FLIGHT_TIME[0])}
                            <span uk-icon="icon: arrow-right; ratio: 1.5" style={{ verticalAlign: "bottom" }}></span>
                            {getTimeIn12HourFormat(FLIGHT_TIME[1])}
                        </React.Fragment>

                    }
                </span>
            </div>
        </div>
    )
}
