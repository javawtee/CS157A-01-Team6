import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchField from 'components/FlightSearch/SearchField';
import FlightSearchResults from 'components/FlightSearch/FlightSearchResults';
import FlightReservationMain from 'components/FlightReservation/FlightReservationMain'
import FlightSummary from 'components/FlightSummary'

class Booking extends Component {
    componentDidMount = () => {
        this.props.getAirportList()
        if (!this.props.searchResultsLoaded && this.props.currentStep === 1) {
            // reload search result when user refreshes FlightSearchResults page
            this.props.reloadSearchResults()
        }
    }

    getView = () => {
        var { searchResultsLoaded,
            currentStep, isRoundTrip,
            validForReservation, toReservation,
            flightDepartFrom, flightArriveTo,
            flightFromDate, flightToDate,
            departFlightTime, returnFlightTime,
            departFlights, returnFlights,
            selectedDepartFlight, selectedReturnFlight } = this.props
        switch (currentStep) {
            case 0:
                return <SearchField />
            case 1:
                return (
                    <React.Fragment>
                        {
                            searchResultsLoaded &&
                            <React.Fragment>
                                <FlightSearchResults type={'Depart'} flights={departFlights} />
                                {
                                    isRoundTrip &&
                                    <FlightSearchResults type={'Return'} flights={returnFlights} />
                                }
                                {
                                    validForReservation &&
                                    <div className="uk-width-1-1">
                                        <button className="uk-button uk-button-primary uk-padding" onClick={() => toReservation()}>
                                            Continue To Reservation
                                    </button>
                                    </div>
                                }
                            </React.Fragment>
                        }
                    </React.Fragment>
                )
            case 2:
                return (
                    <FlightReservationMain
                        SEATS_LEFT={() => {
                            var departSeats = selectedDepartFlight.ecoSeats || selectedDepartFlight.busSeats
                            var returnSeats = selectedReturnFlight ? selectedReturnFlight.ecoSeats || selectedReturnFlight.busSeats : 5
                            return departSeats < returnSeats ? departSeats : returnSeats
                        }}
                    >
                        <FlightSummary
                            selectedDepartFlight={{ ...selectedDepartFlight, flightDepartFrom, flightArriveTo }}
                            TYPE="Depart"
                            DEPART_FROM={flightDepartFrom}
                            ARRIVE_TO={flightArriveTo}
                            SELECTED_DATE={new Date(flightFromDate)}
                            FLIGHT_TIME={[departFlightTime.depTime, departFlightTime.arrTime]}
                        />
                        {
                            isRoundTrip &&
                            <FlightSummary
                                selectedReturnFlight={{ ...selectedReturnFlight, flightDepartFrom, flightArriveTo }}
                                TYPE="Return"
                                DEPART_FROM={flightArriveTo}
                                ARRIVE_TO={flightDepartFrom}
                                SELECTED_DATE={new Date(flightToDate)}
                                FLIGHT_TIME={[returnFlightTime.depTime, returnFlightTime.arrTime]}
                            />
                        }
                    </FlightReservationMain>
                )
            default:
                return <React.Fragment></React.Fragment>
        }
    }

    render() {
        return (
            <div className="uk-flex uk-margin-auto uk-width-1-1" uk-grid="">
                {this.getView()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loaded: state.booking.loaded,
    searchResultsLoaded: state.booking.searchResultsLoaded,
    currentStep: state.booking.current,
    isRoundTrip: state.booking.isRoundTrip,
    validForReservation: state.booking.validForReservation,
    flightDepartFrom: state.booking.searchInputs.flightFrom,
    flightArriveTo: state.booking.searchInputs.flightTo,
    flightFromDate: state.booking.dateInputs.fromDate,
    flightToDate: state.booking.dateInputs.toDate,
    departFlightTime: state.booking.ticket.departFlight,
    returnFlightTime: state.booking.ticket.returnFlight,
    departFlights: state.booking.departFlights,
    returnFlights: state.booking.returnFlights,
    selectedDepartFlight: state.booking.ticket.departFlight,
    selectedReturnFlight: state.booking.ticket.returnFlight,
})

const mapDispatchToProps = dispatch => ({
    getAirportList: () => dispatch({ type: "AIRPORT_GET_LIST" }),
    reloadSearchResults: () => dispatch({ type: "BOOKING_APPLY_SEARCH" }),
    toReservation: () => dispatch({ type: "BOOKING_TO_RESERVATION" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

