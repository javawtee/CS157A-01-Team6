import React, { Component } from 'react'

let flights = [{

    flightid : '01',
    DepCity : 'SJC',
    ArrCity : 'NYC',
    class: 'Business',
    flightDate : '2019-05-09 22:00:00 --- 2019-05-10 01:00:00',
    flightPrice : '$1200'
},

{ 
    flightid : '02',
    DepCity : 'NYC',
    ArrCity : 'SJC',
    class : 'Business',
    flightDate : '2019-05-23 22:00:00 --- 2019-05-24 01:00:00',
    flightPrice : '$1250'
}
]

class CurrentFlight extends Component {

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
            <h4>Current Flight</h4></div>

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

export default CurrentFlight;