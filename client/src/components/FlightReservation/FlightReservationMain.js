import React, { Component } from 'react'
import getPassengerForm from 'models/passenger'
import ResvPassenger from './ResvPassenger'
import FlightSummary from '../FlightSummary'

export class FlightReservationMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // limit: allowed number of passengers on each reservation; 
            // value should be same as number of seats left at the time user click to reserve
            seatLeft: 5,
            passengers: [getPassengerForm()]
        }
    }

    getPassengerFormView = () => this.state.passengers.map((passengerForm, id) =>
        <ResvPassenger
            key={id}
            id={id} // id is index of passengers array
            form={passengerForm}
            onChange={this.handleChangePassengerForm}
            onRemove={this.handleRemovePassengerForm}
        />)

    handleAddNewPassengerForm = e => {
        var { seatLeft, passengers } = this.state
        if (passengers.length === seatLeft) return alert(`Maximum of ${seatLeft} passengers per reservation`)
        var newPassengers = passengers
        newPassengers.push(getPassengerForm())
        this.setState({ passengers: newPassengers })
    }

    handleRemovePassengerForm = id => {
        var { passengers } = this.state
        if (passengers.length === 1) return alert(`Cannot continue reservation with no passenger`)
        var newPassengers = passengers
        newPassengers.splice(id, 1) // e.target.id is index of passengers array
        this.setState({ passengers: newPassengers })
    }

    handleChangePassengerForm = e => {
        var { passengers } = this.state
        var newPassengers = passengers
        newPassengers[e.target.id][e.target.name] = e.target.value  // e.target.id is index of passengers array
        this.setState({ passengers: newPassengers })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="uk-margin-auto@s uk-width-1-1" uk-grid="">
                <div className="uk-width-1-1" uk-grid="">
                    <div className="uk-width-1-1">
                        <FlightSummary
                            TYPE="Depart"
                            DEPART_FROM={"San Jose"}
                            ARRIVE_TO={"Las Vegas"}
                            SELECTED_DATE={new Date()}
                            FLIGHT_TIME={new Date()}
                        />
                        <FlightSummary
                            TYPE="Return"
                            DEPART_FROM={"Las Vegas"}
                            ARRIVE_TO={"San Jose"}
                            SELECTED_DATE={new Date()}
                            FLIGHT_TIME={new Date()}
                        />
                    </div>
                    <div className="uk-width-1-1 uk-padding-remove">
                        <button className="uk-button uk-button-primary"
                            onClick={this.handleAddNewPassengerForm}>
                            <span className="uk-margin-small-right" uk-icon="plus"></span>
                            Add Passenger
                        </button>
                    </div>
                </div>
                {this.getPassengerFormView()}
                <form className="uk-width-1-1 uk-flex uk-flex-right uk-margin-large-right" onSubmit={this.handleSubmit}>
                    <button className="uk-button uk-button-primary" type="submit">Continue</button>
                </form>
            </div>
        )
    }
}

export default FlightReservationMain

