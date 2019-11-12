import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                    <nav className="uk-navbar-container" uk-navbar="">
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                            <li className={this.props.profile ? "uk-active" : ""}><a href="/dashBoard">
                                    Home
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

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch({ type: "SIGN_OUT" })
})

export default connect(null, mapDispatchToProps)(NavBar)
