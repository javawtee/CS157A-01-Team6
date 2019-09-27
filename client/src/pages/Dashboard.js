import React, {Component} from 'react'
import Notifications from 'components/Dashboard/Notifications'

class Dashboard extends Component {

    render() {
        return (
<<<<<<< Updated upstream
        <div className="uk-background-cover" uk-height-viewport="expand: true">
                <div className="uk-width-1-2@s uk-align-center"></div>
                <h1 style={{ color: "red", fontWeight: "bold" }}>Dashboard</h1>
                <Notifications/>
            </div>
=======
            <div className="uk-background-cover" style={{backgroundImage:"url(media/welcome-bg.png)"}} uk-height-viewport="expand: true">
            <div>
                Dashboard
                <Notifications hello={'Dashboard'} />
            </div></div>
>>>>>>> Stashed changes
        )
    }
}

export default Dashboard