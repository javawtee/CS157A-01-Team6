import React, { Component } from 'react';
import { connect } from 'react-redux'
import getPassengerForm from 'models/passenger';
import ResvPassenger from './ResvPassenger';
import UIkit from 'uikit';
import { validateEmailFormat } from 'utils/validators'

export class FlightReservationMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // limit: allowed number of passengers on each reservation
            seatsLeft: 5,
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
        />
    )

    handleAddNewPassengerForm = e => {
        var { seatsLeft, passengers } = this.state
        if (passengers.length === seatsLeft) return alert(`Maximum of ${seatsLeft} passengers per reservation`)
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
        newPassengers[e.target.id][`valid${e.target.name}`] = true // reset validation
        if (e.target.name === "sendConfirmation" && e.target.value === "no") {
            newPassengers[e.target.id].reservationEmail = ""
            newPassengers[e.target.id].validreservationEmail = true
        }
        this.setState({ passengers: newPassengers })
    }

    handleSubmit = e => {
        e.preventDefault()
        let valid = true
        let passengers = this.state.passengers
        let seenID = []
        for (var i in passengers) {
            let { firstName, lastName, middleInitial, reservationEmail, IDNumber, sendConfirmation } = passengers[i]
            let validfirstName = firstName.length > 1
            let validlastName = lastName.length > 1
            let validmiddleInitial = middleInitial.length === 0 || (middleInitial.length > 0 && isNaN(middleInitial))
            let validreservationEmail = sendConfirmation === "no" || (reservationEmail.length > 0 && validateEmailFormat(reservationEmail))
            let validIDNumber = IDNumber.length > 5
            if (!validfirstName || !validlastName || !validmiddleInitial || !validreservationEmail || !validIDNumber) {
                passengers[i] = {
                    ...passengers[i],
                    validfirstName, validlastName, validmiddleInitial,
                    validreservationEmail, validIDNumber
                }
                valid = false
            }
            if (validIDNumber && !seenID.includes(IDNumber)) {
                seenID.push(IDNumber)
            }
        }
        if (!valid) {
            return this.setState({ passengers })
        }
        if (seenID.length !== this.state.passengers.length) {
            return UIkit.notification("Found duplicate ID", { status: 'danger', timeout: 2000 })
        }

        const getFlightClass = flight => {
            return flight.ecoPrice ? "economy" : "business"
        }

        let departFlight = this.props.children[0].props.selectedDepartFlight
        departFlight.flightClass = getFlightClass(departFlight)
        let returnFlight = this.props.children[1] ? this.props.children[1].props.selectedReturnFlight : undefined
        returnFlight.flightClass = this.props.children[1] ? getFlightClass(returnFlight) : undefined
        this.props.finalizeBooking({ departFlight, returnFlight, passengers })
    }

    render() {
        return (
            <div className="uk-margin-auto@s uk-width-1-1" uk-grid="">
                <div className="uk-width-1-1" uk-grid="">
                    <ul className="uk-width-1-1" uk-accordion="" style={{ background: "white" }}>
                        <li>
                            <a className="uk-accordion-title" href="#flight-summary">Flight Summary</a>
                            <div className="uk-accordion-content">
                                {this.props.children}
                            </div>
                        </li>
                    </ul>
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
                    <button className="uk-button uk-button-primary" type="submit">Finish</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    finalizeBooking: payload => dispatch({ type: "FINALIZE_BOOKING", payload })
})

export default connect(null, mapDispatchToProps)(FlightReservationMain)

