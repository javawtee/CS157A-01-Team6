import React from "react";
import { useSelector } from 'react-redux'
import "stylesheets/App.css";
import { Switch, Route } from "react-router-dom";
import { generateRoutes } from 'utils/generators'
import routes from "models/routes";
import DevTest from "Test/DevTest";


export default function App(props) {
  const { authenticated } = useSelector(state => ({ authenticated: state.background.authenticated }))

  return (
    <div className="App">
      {
        authenticated !== null &&
        <Switch>
          {/* this route (path="") is used for testing purpose only, will be remove in final release */}
          <Route exact path="/devtest" component={DevTest} />
          {generateRoutes(routes, { authenticated, defaultAuthenticatedPath: "/dashboard" })}
        </Switch>
      }
    </div>
  );

}
