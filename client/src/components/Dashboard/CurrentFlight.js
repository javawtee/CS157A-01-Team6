import React, { Component } from 'react'

const flight = {

    flightid : '01',
    DepCity : 'SJC',
    ArrCity : 'NYC',
    class: 'Business',
    flightDate : '2019-05-09 22:00:00 --- 2019-05-10 01:00:00',
    flightPrice : '$1200'
}

class CurrentFlight extends Component {

    constructor(props) {
        super(props)
        this.state = flight
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
               <tr>
                <td className={this.props.profile ? "uk-active" : ""}><a href="/profile">
                {this.state.flightid}</a></td>
                <td>{this.state.DepCity}</td>
                <td>{this.state.ArrCity}</td>
                <td>{this.state.class}</td>
                <td>{this.state.flightDate}</td>
                <td>{this.state.flightPrice}</td>
                </tr>
            </tbody>
        </table>
        </>
        )
}
}

export default CurrentFlight;