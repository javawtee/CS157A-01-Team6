import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightTable from 'components/Dashboard/FlightTable';
import { isAfter, compareAsc, compareDesc } from "date-fns";

class Dashboard extends Component {
    componentDidMount = () => {
        this.props.getFlights()
    }

    render() {
        const { flights } = this.props
        var reservations, pastflights
        if (flights) {
            reservations =
                flights.filter(flight => isAfter(new Date(flight.departTime), new Date()))
                    .sort((p, c) => compareAsc(new Date(p.departTime), new Date(c.departTime)))
            pastflights =
                flights.filter(flight => !reservations.includes(flight))
                    .sort((p, c) => compareDesc(new Date(p.arriveTime), new Date(c.arriveTime)))
        }
        return (
            <div>
                {
                    flights &&
                    <div className="uk-margin-top" uk-height-viewport="expand: true" style={{ backgroundColor: "white" }}>
                        <FlightTable caption="Reservations" data={reservations} />
                        <FlightTable caption="Flight History" data={pastflights} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    flights: state.user.flights
})

const mapDispatchToProps = dispatch => ({
    getFlights: () => dispatch({ type: "USER_GET_FLIGHTS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)