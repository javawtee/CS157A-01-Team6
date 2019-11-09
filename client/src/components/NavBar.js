import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="uk-navbar-container uk-margin" uk-navbar="">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            {/*<button className="uk-button uk-button-default"><a style={{ color: "red" }} href="ert#">
                                <span className="uk-icon uk-margin-small-right" uk-icon="icon: home">
                            </span>Home</a></button>*/}
                            <button className="uk-button uk-button-default">
                                <span className="uk-icon uk-margin-small-right" uk-icon="icon: world" />
                                Booking</button>
                        </ul>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <button className={this.props.home ? "uk-active" : ""}><span className="uk-icon uk-margin-small-right" uk-icon="icon: world" />
                                <a href="/dashboard">HOME</a></button>
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
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch({ type: "SIGN_OUT" })
})

export default connect(null, mapDispatchToProps)(NavBar)
