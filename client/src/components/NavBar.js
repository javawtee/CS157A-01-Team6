import React from 'react'

const NavBar = props => {
    return (
        <React.Fragment>
            <nav className="uk-navbar-container uk-margin" uk-navbar>

                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <button className="uk-button uk-button-default"><a href="ert#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: home">
                                </span>Home</a></button>
                        <button className="uk-button uk-button-default"><a href="ert#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: world">
                                </span>Booking</a></button>
                    </ul>
                    <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <button className="uk-button uk-button-default"><a href="ert#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: info">
                                </span>Profile</a></button>
                        <button className="uk-button uk-button-default"><a href="ert#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-out">
                                </span>Sign out</a></button>
                        <form action = "javascript.void(0)">
                            <input class = "uk-input uk-form-width-medium" type= "text" placeholder = "previous journey"></input>
                            <button class="uk-button uk-button-default">
                                <span class="uk-icon uk-margin-small-right" uk-icon="icon: search">
                                </span>Find</button>
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
