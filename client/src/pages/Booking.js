import React, { Component } from 'react';
import { connect } from 'react-redux';
import P404 from 'pages/P404';
import SearchField from 'components/FlightSearch/SearchField';
import FlightSearchResults from 'components/FlightSearch/FlightSearchResults';
import FlightReservationMain from 'components/FlightReservation/FlightReservationMain'
import FlightSummary from 'components/FlightSummary'

export class Booking extends Component {
    componentDidMount = () => this.props.initLoad()
    getView = () => {
        var { currentStep, isRoundTrip,
            validForReservation, toReservation,
            flightDepartFrom, flightArriveTo,
            flightFromDate, flightToDate,
            departFlightTime, returnFlightTime } = this.props
        switch (currentStep) {
            case 0:
                return <SearchField />
            case 1:
                return (
                    <React.Fragment>
                        <FlightSearchResults type={'Depart'} />
                        {
                            isRoundTrip &&
                            <FlightSearchResults type={'Return'} />
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
                )
            case 2:
                return (
                    <FlightReservationMain>
                        <FlightSummary
                            TYPE="Depart"
                            DEPART_FROM={flightDepartFrom}
                            ARRIVE_TO={flightArriveTo}
                            SELECTED_DATE={new Date(flightFromDate)}
                            FLIGHT_TIME={[departFlightTime.depTime, departFlightTime.arrTime]}
                        />
                        {
                            isRoundTrip &&
                            <FlightSummary
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
                return <P404 />
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
    currentStep: state.booking.current,
    isRoundTrip: state.booking.isRoundTrip,
    validForReservation: state.booking.validForReservation,
    flightDepartFrom: state.booking.searchInputs.flightFrom,
    flightArriveTo: state.booking.searchInputs.flightTo,
    flightFromDate: state.booking.dateInputs.fromDate,
    flightToDate: state.booking.dateInputs.toDate,
    departFlightTime: state.booking.ticket.departFlight,
    returnFlightTime: state.booking.ticket.returnFlight,
})

const mapDispatchToProps = dispatch => ({
    initLoad: () => dispatch({ type: "BOOKING_INIT_LOAD" }),
    toReservation: () => dispatch({ type: "BOOKING_TO_RESERVATION" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

