import React, { Component } from 'react'

class Profile extends Component {

    render() {
        return (
        <div className="uk-child-width-expand@s" uk-grid>
        
        <div>
            <ul className="uk-list uk-list-striped">
                <li>First Name: </li>
                <li>Last Name: </li>
                <li>middle_Initial: </li>
                <li>Email: </li>
                <li>DOB: </li>
            </ul>
        </div>
        </div>
        )
    }
}


export default Profile