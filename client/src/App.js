import React, { Component } from "react";
import "stylesheets/App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import DevTest from "Test/DevTest";
import NavBar from "components/NavBar";
import Dashboard from "pages/Dashboard";
import Booking from "pages/Booking";
import Welcome from "pages/Welcome";
import P404 from "pages/P404";
import Profile from "pages/Profile"

class App extends Component {
  componentDidMount = () => {
    this.props.checkAuthentication();
  };

  AuthenticatedRoute = ({ component: Component, path, ...rest }) => {
    return (
      <Route {...rest} render={props =>
        this.props.authenticated ? <Component {...props} /> : <Redirect to={path} />} />
    )
  };

  render() {
    return (
      <div className="App">
        <Switch>
          {/* this route (path="") is used for testing purpose only, will be remove in final release */}
          <Route exact path="/devtest" component={DevTest} />
          <Route
            exact path="/" render={() =>
              this.props.authenticated ? <Redirect to="/dashboard" /> : <Welcome />
            }
          />
          <this.AuthenticatedRoute
            exact path="/dashboard"
            component={() => <NavBar home={true} content={<Dashboard />} />}
          />
          <this.AuthenticatedRoute
            exact path="/profile"
            component={() => <NavBar home={true} content={<Profile />} />}
          />
          <this.AuthenticatedRoute
            exact path="/booking"
            component={() => <NavBar booking={true} content={<Booking />} />}
          />
          <Route exact path="*" render={() => <P404 />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.background.authenticated
});

const mapDispatchToProps = dispatch => ({
  checkAuthentication: () => dispatch({ type: "SIGNED_IN" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
