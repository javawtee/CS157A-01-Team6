import React, {Component} from 'react'
import Notifications from 'components/Dashboard/Notifications'

class Dashboard extends Component {

    render() {
        return (
        <div className="uk-background-cover" uk-height-viewport="expand: true">
                <div className="uk-width-1-2@s uk-align-center"></div>
                <h1 style={{ color: "red", fontWeight: "bold" }}>Dashboard</h1>
                <Notifications/>
            </div>
        )
    }
}

export default Dashboard