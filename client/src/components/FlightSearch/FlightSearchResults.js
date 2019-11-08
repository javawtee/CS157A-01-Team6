import React from "react";
import ResultHeader from 'components/FlightSearch/ResultHeader';

import { generateComponents } from 'utils/generators';
import ResultItem from "components/FlightSearch/ResultItem";

// for testing purpose
import flights from 'Test/flights';
import flightTimeOptions from 'models/flightTimeOptions';
import sortByOptions from 'models/sortByOptions';

export default function FlightSearchResults(props) {
    return (
        <React.Fragment>
            <ResultHeader
                TYPE="Depart" // value should be from props
                SELECTED_DATE={new Date()} // value should be from props
                SELECTED_FLIGHT_TIME={flightTimeOptions[1].text} // value should be from props
                SELECTED_SORT_BY={sortByOptions[1].text} // value should be from props
            />
            {generateComponents(flights, ResultItem)} {/* flights value should be from reducer */}
        </React.Fragment>
    )
}