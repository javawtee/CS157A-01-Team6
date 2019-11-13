import React, {Component} from 'react'
import Notifications from 'components/Dashboard/Notifications'
import FlightHistory from 'components/Dashboard/FlightHistory'

class Dashboard extends Component {

    render() {
        return (
        <div className="uk-background-cover" uk-height-viewport="expand: true">
                <div className="uk-width-1-2@s uk-align-center"></div>
                <h1>Dashboard</h1>
                <FlightHistory/>
            </div>
        )
    }
}

export default Dashboard