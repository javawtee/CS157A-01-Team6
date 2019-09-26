import React from 'react'

const Notifications = props => {  
    return (
        <div>
            Hello from {props.hello || 'Notifications'}
        </div>
    )
}

export default Notifications