import React, { Component } from 'react'

let flights = [{

    flightid : '04',
    DepCity : 'SJC',
    ArrCity : 'NYC',
    Class : 'Business',
    flightDate : '2019-01-09 22:00:00 --- 2019-01-10 01:00:00',
    flightPrice : '$1200'
},

{ 
    flightid : '03',
    DepCity : 'NYC',
    ArrCity : 'SJC',
    Class : 'Business',
    flightDate : '2019-02-23 22:00:00 --- 2019-02-24 01:00:00',
    flightPrice : '$1250'
}
]

class PastFlight extends Component {

    createTable = () => {
        // let table = []
        console.log(Object.keys(flights[0]))
        return (
            flights.map((flight, id) => <tr key={id}>
                {Object.keys(flight).map((key, id2) => <td key={id2}>{flight[key]}</td>)}
            </tr>)
        )
    }

    render() {
        return (
            <>
            <div className="uk-background-cover" uk-height-viewport="expand: true">
                <div className="uk-width-1-2@s uk-align-center"></div>
                <h4>Past Flights</h4></div>
        <table className="uk-table uk-table-divider">
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Class</th>
                    <th>Flight Date</th>
                    <th>Charge</th>
                </tr>
            </thead>
            <tbody>
                {this.createTable()}
            </tbody>
    </table></>
    )
}
}

export default PastFlight;