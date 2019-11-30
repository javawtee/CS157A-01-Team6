import React from "react";
import { useSelector } from 'react-redux'
import "stylesheets/App.css";
import { Switch } from "react-router-dom";
import { generateRoutes } from 'utils/generators'
import routes from "models/routes";


export default function App(props) {
  const { authenticated } = useSelector(state => ({ authenticated: state.background.authenticated }))

  return (
    <div className="App">
      {
        authenticated !== null &&
        <Switch>
          {generateRoutes(routes, { authenticated, defaultAuthenticatedPath: "/dashboard" })}
        </Switch>
      }
    </div>
  );

}
