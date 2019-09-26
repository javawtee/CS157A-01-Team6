import React, {Component} from 'react'

import Notifications from 'components/Dashboard/Notifications'

class Dashboard extends Component {

    render() {
        return (
            <div>
                Dashboard
                <Notifications hello={'Dashboard'} />
            </div>
        )
    }
}

export default Dashboard