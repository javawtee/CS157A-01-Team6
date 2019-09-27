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
                                <button className="uk-button uk-button-default">
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: info" />
                                    Profile</button>
                                <button className="uk-button uk-button-default" onClick={() => this.props.signOut()}>
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: sign-out" />
                                    Sign out
                                </button>
                                {/*<form action = "javascript.void(0)">
                                <input className= "uk-input uk-form-width-medium" type= "text" placeholder = "previous journey"></input>
                                <button className="uk-button uk-button-default">
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: search">
                                    </span>Find</button>
                                </form>*/}
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
