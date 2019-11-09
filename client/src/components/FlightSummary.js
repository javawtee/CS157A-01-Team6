import React from 'react';
import { format } from 'date-fns';

// props:
// type (Depart || Return) - required
// SELECTED_DATE - required
// FLIGHT_TIME - optional

export default function FlightSummary(props) {
    const { TYPE, DEPART_FROM, ARRIVE_TO, SELECTED_DATE, FLIGHT_TIME } = props
    return (
        <div className="uk-margin-auto@s uk-width-1-1" uk-grid=''>
            <div className="uk-width-1-1 uk-text-large uk-text-bold uk-padding-remove">
                {TYPE} Flight
            </div>
            <div className="uk-width-1-4@s uk-padding-remove">
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {DEPART_FROM} <span uk-icon="icon: arrow-right"></span> {ARRIVE_TO}
                </span>
                <br />
                <a href="#go-back-to-search">Modify</a>
            </div>
            <div className="uk-width-1-3@s uk-padding-remove">
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {format(SELECTED_DATE, "iiii MMM dd, yyyy")} &nbsp;
                    {FLIGHT_TIME ? format(FLIGHT_TIME, "hh:mm a") : ""}
                </span>
            </div>
        </div>
    )
}
