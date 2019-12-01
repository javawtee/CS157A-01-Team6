import React, { Component } from 'react'
import ResultHeader from 'components/FlightSearch/ResultHeader';

import { parse, compareAsc } from "date-fns";
import { generateComponents } from 'utils/generators';
import ResultItem from "components/FlightSearch/ResultItem";
import { connect } from 'react-redux'

export class FlightSearchResults extends Component {
    constructor(props) {
        super(props)
        this.getType = () => { return props.type.toLowerCase() + "Flight" }
        this.state = {
            selected: props.selectedTicket[this.getType()],
            selectedDate: props.selectedDate[`${props.type === "Depart" ? "fromDate" : "toDate"}`],
            selectedFlightTimeId: props.selectedFlightTime[`${props.type === "Depart" ? "departTimeId" : "arriveTimeId"}`],
            flights: props.flights
        }
    }

    handleSelectFlight = e => {
        const breakdown = e.split('-')
        const flightData = { ...this.props.flights[breakdown[2]] } // duplicate, not using the old data to prevent losing when update Selected
        if (breakdown[1] === 'economy') {
            delete flightData.busPrice
            delete flightData.busSeats
        } else {
            delete flightData.ecoPrice
            delete flightData.ecoSeats
        }
        this.setState({ selected: flightData }, () => {
            this.props.isNextReservation(this.getType(), this.state.selected)
        })
    }

    handleChangeFlight = e => {
        this.setState({ selected: null }, () => {
            this.props.isNextReservation(this.getType(), this.state.selected)
        })
    }

    handleSelectSortBy = value => {
        let sorted = this.state.flights

        const convertStringToDate = string => {
            return parse(string, "HH:mm", new Date(this.state.selectedDate))
        }

        console.log(sorted)
        switch (value) {
            case "Depart Time":
                sorted = sorted.sort((prev, curr) => compareAsc(convertStringToDate(prev.depTime), convertStringToDate(curr.depTime)))
                break
            case "Arrive Time":
                sorted = sorted.sort((prev, curr) => compareAsc(convertStringToDate(prev.arrTime), convertStringToDate(curr.arrTime)))
                break
            case "Price":
                sorted = sorted.sort((prev, curr) => prev.ecoPrice - curr.ecoPrice && prev.busPrice - curr.busPrice)
                break
            default:
                break
        }
        this.setState({ flights: sorted })
    }

    render() {
        const { type, selectedSortById } = this.props
        const { selectedDate, selectedFlightTimeId, flights } = this.state
        const isSelected = this.state.selected !== null
        return (
            <React.Fragment>
                <ResultHeader
                    selected={isSelected}
                    TYPE={type}
                    SELECTED_DATE={new Date(selectedDate)}
                    SELECTED_FLIGHT_TIME_ID={selectedFlightTimeId}
                    SELECTED_SORT_BY_ID={selectedSortById}
                    handleSelectSortBy={this.handleSelectSortBy}
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

                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    selectedTicket: state.booking.ticket,
    selectedFlight: state.booking.searchInputs,
    selectedDate: state.booking.dateInputs,
    selectedFlightTime: { departTimeId: state.booking.departTimeId, arriveTimeId: state.booking.arriveTimeId },
    selectedSortById: state.booking.sortById,
})

const mapDispatchToProps = dispatch => ({
    isNextReservation: (tripType, selected) => dispatch({ type: "BOOKING_IS_NEXT_RESERVATION", tripType, selected })
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchResults);
