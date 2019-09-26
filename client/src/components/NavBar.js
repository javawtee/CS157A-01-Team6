import React from 'react'

const NavBar = props => {
    return (
        <React.Fragment>
            <nav className="uk-navbar-container" uk-navbar>

                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="ert#">Home</a></li>
                        <li className = "uk-active"><a href="ert#">Booking</a></li>
                    </ul>

                    <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href="ert#">Profile</a></li>
                        <li className = "uk-active"><a href="ert#">Sign out</a></li>
                        <form action = "javascript.void(0)">
                            <input class = "uk-input uk-form-width-medium" type= "text" placeholder = "previous journey"></input>
                        </form>
                    </ul>
                </div>
                </div>

            </nav>
            {props.content}
            <button onClick={() => alert('abc')}>Notification</button>
        </React.Fragment>
    )
}

export default NavBar
