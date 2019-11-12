import React, { Component } from 'react'
import ResultHeader from 'components/FlightSearch/ResultHeader';

import { generateComponents } from 'utils/generators';
import ResultItem from "components/FlightSearch/ResultItem";
import { connect } from 'react-redux'

// for testing purpose
import flights from 'Test/flights';

export class FlightSearchResults extends Component {
    constructor(props) {
        super(props)
        this.getType = () => { return props.type.toLowerCase() + "Flight" }
        this.state = {
            selected: props.selectedTicket[this.getType()],
            selectedDate: props.selectedDate[`${props.type === "Depart" ? "fromDate" : "toDate"}`],
            selectedFlightTime: props.selectedFlightTime[`${props.type === "Depart" ? "fromOption" : "toOption"}`].text,
        }
    }

    handleSelectFlight = e => {
        // type: [0]; flightClass: [1]; indexOfData: [2]
        const breakdown = e.split('-')
        const flightData = { ...flights[breakdown[2]] } // duplicate, not using the old data to prevent losing when update Selected
        if (breakdown[1] === 'economy') delete flightData.business
        else delete flightData.economy
        this.setState({ selected: flightData }, () => {
            this.props.isNextReservation(this.getType(), this.state.selected)
        })
    }

    handleChangeFlight = e => {
        this.setState({ selected: null }, () => {
            this.props.isNextReservation(this.getType(), this.state.selected)
        })
    }

    render() {
        const { type, selectedSortBy } = this.props
        const { selectedDate, selectedFlightTime } = this.state
        const isSelected = this.state.selected !== null
        return (
            <React.Fragment>
                <ResultHeader
                    selected={isSelected}
                    TYPE={type} // value should be from props
                    SELECTED_DATE={new Date(selectedDate)} // value should be from props
                    SELECTED_FLIGHT_TIME={selectedFlightTime} // value should be from props
                    SELECTED_SORT_BY={selectedSortBy} // value should be from props
                />
                {
                    isSelected === true ?
                        <ResultItem
                            selected={isSelected}
                            data={this.state.selected}
                            handleChangeFlight={this.handleChangeFlight}
                        />
                        :
                        generateComponents(flights, ResultItem, { type, handleSelectFlight: this.handleSelectFlight })
                } {/* flights value should be from reducer */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    selectedTicket: state.booking.ticket,
    selectedFlight: state.booking.searchInputs,
    selectedDate: state.booking.dateInputs,
    selectedFlightTime: state.booking.flightTimeInputs,
    selectedSortBy: state.booking.sortByInput.text
})

const mapDispatchToProps = dispatch => ({
    isNextReservation: (tripType, selected) => dispatch({ type: "BOOKING_IS_NEXT_RESERVATION", tripType, selected })
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchResults);
