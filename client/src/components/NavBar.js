import React from 'react'
import { useDispatch } from 'react-redux'
import { generateNavItems } from 'utils/generators'
import routes from 'models/routes'

export default function NavBar(props) {
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar-container" uk-navbar="">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            {generateNavItems(routes, props.currentViewPath)}
                            <li><a href="#sign-out" onClick={e => { e.preventDefault(); dispatch({ type: "SIGN_OUT" }) }}>
                                Sign Out
                            </a></li>
                                <li className={this.props.profile ? "uk-active" : ""}><a href="/profile">
                                    User Profile
                            </a></li>
                                <li className={this.props.booking ? "uk-active" : ""}><a href="/booking">
                                    Booking Flight
                            </a></li>
                                <li><a href="#sign-out" onClick={e => { e.preventDefault(); this.props.signOut() }}>
                                    Sign Out
                            </a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div uk-height-viewport="offset-top: true">{this.props.content}</div>
            </React.Fragment>
        )
    }
}
