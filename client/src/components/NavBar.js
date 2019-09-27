<<<<<<< Updated upstream
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
=======
import React from 'react'
import {connect} from 'react-redux'



const NavBar = props => {

    return (
        <React.Fragment>
            <nav className="uk-navbar-container" uk-navbar>

                <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="ert#">Home</a></li>
                    <li className = "uk-active"><a href="ert#">Booking</a></li></ul>

                    <div class = "uk-navbar-right">
                    <ul class="uk-navbar-nav">
                    <li className="uk-active"><a href="ert#">Profile</a></li>
                    <li className="uk-active"><a href="ert#">Sign Out</a></li>
                        <form action="javascript:void(0)">
                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Previous Journey"></input>
                            <button class="uk-button uk-button-default">Search</button>
                        </form>
                    </ul>
                </div>
                </div>
            </nav>

            {props.content}
            <button onClick={() => alert('abc')}>ABC</button>
        </React.Fragment>
    )
>>>>>>> Stashed changes
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch({ type: "SIGN_OUT" })
  })

export default connect(null, mapDispatchToProps)(NavBar)
