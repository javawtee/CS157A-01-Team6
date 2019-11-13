import React, { Component } from 'react'
import CurrentFlight from '../Dashboard/CurrentFlight'
import PastFlights from '../Dashboard/PastFlights'

class FlightHistory extends Component {

    render() {
        return (
        <React.Fragment>
            <CurrentFlight/>
            <PastFlights/> 
        </React.Fragment>
    )
}
}

export default FlightHistory;