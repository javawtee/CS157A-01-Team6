import React from 'react';
import { Redirect, Route } from "react-router-dom";
import NavBar from "components/NavBar";

export default function AuthenticatedRoute(props) {
    const { authenticated, defaultAuthenticatedPath, HomePage, component: Component, ...rest } = props
    return (
        <Route {...rest} render={({ history }) =>
            authenticated ?
                (
                    Component ?
                        <NavBar currentViewPath={history.location.pathname} content={<Component {...props} />} />
                        :
                        <Redirect to={defaultAuthenticatedPath} />
                )
                :
                (
                    HomePage ?
                        <HomePage />
                        :
                        <Redirect to="/" />
                )
        } />
    )
}
