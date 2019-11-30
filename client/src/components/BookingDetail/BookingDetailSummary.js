import React from 'react';
import { format } from 'date-fns';

// props:
// DEPART_FROM: required
// ARRIVE_TO: required
// DEPART_TIME: required
// ARRIVE_TIME: required

export default function FlightSummary(props) {
    const { DEPART_FROM, ARRIVE_TO, DEPART_TIME, ARRIVE_TIME } = props
    return (
        <div className="uk-margin-auto@s uk-width-1-1" uk-grid="">
            <div className="uk-width-1-1 uk-margin-remove-top">
                Departure<br />
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {DEPART_FROM} <br />
                    {format(new Date(DEPART_TIME), "MM/dd/yyyy hh:mm a")}
                </span>
            </div>
            <span className="uk-width-1-1 uk-margin-remove-vertical" uk-icon="icon: arrow-right"></span>
            <div className="uk-width-1-1 uk-margin-remove-top">
                Arrival<br />
                <span className="uk-width-1-1 uk-text-bold uk-padding-remove">
                    {ARRIVE_TO} <br />
                    {format(new Date(ARRIVE_TIME), "MM/dd/yyyy hh:mm a")}
                </span>
            </div>
        </div>
    )
}
