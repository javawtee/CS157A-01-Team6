import React, { Component } from "react";
import "stylesheets/App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import DevTest from "Test/DevTest";
import Dashboard from "pages/Dashboard";
import NavBar from "components/NavBar";
import Welcome from "pages/Welcome";
import P404 from "pages/P404";

class App extends Component {
  componentDidMount = () => {
    this.props.checkAuthentication();
  };

  AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.props.authenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to="/" />
          )
      }
    />
  );

  render() {
    return (
      <div className="App">
        <Switch>
          {/* this route (path="") is used for testing purpose only, will be remove in final release */}
          <Route exact path="/devtest" component={DevTest} />
          <Route
            exact
            path="/"
            render={() =>
              this.props.authenticated ? (
                <Redirect to="/dashboard" />
              ) : (
                  <Welcome />
                )
            }
          />
          <this.AuthenticatedRoute
            path="/dashboard"
            component={() => <NavBar content={<Dashboard />} />}
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
