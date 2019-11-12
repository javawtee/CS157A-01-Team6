import React from "react";
import { useSelector } from 'react-redux'
import "stylesheets/App.css";
import { Switch, Route } from "react-router-dom";
import { generateRoutes } from 'utils/generators'
import routes from "models/routes";
import DevTest from "Test/DevTest";
import NavBar from "components/NavBar";
import Dashboard from "pages/Dashboard";
import Booking from "pages/Booking";
import Welcome from "pages/Welcome";
import P404 from "pages/P404";
import Profile from "pages/Profile"


export default function App(props) {
  const { authenticated } = useSelector(state => ({ authenticated: state.background.authenticated }))

  return (
    <div className="App">
      {
        authenticated !== null &&
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
      }
    </div>
  );

}
