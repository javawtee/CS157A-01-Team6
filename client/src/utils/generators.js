import React from 'react';
import { Route } from "react-router-dom";
import AuthenticatedRoute from "components/AuthenticatedRoute";

export function generateOptions(className, onChange, defaultValue, listOfOptions, options) {
    return React.createElement('select', { className, onChange, defaultValue, ...options }, [
        listOfOptions.map(opt => React.createElement("option", { key: opt.id, value: opt.text }, [opt.text]))
    ])
}

export function generateComponents(listOfData, ParentComponent, options) {
    return listOfData.map((data, id) =>
        React.createElement(ParentComponent, { key: id, id, data, ...options }, null))
}

export function generateNavItems(listOfRoutes, currentViewPath) {
    return listOfRoutes.map((route, id) => {
        if (route.navItemName) {
            return React.createElement("li", { key: id, className: currentViewPath === route.path ? "uk-active" : "" }, [
                React.createElement("a", { key: route.id, href: route.path }, [route.navItemName])
            ])
        }
    })
}

export function generateRoutes(listOfRoutes, options) {
    return listOfRoutes.map((route =>
        React.createElement(
            route.requiredAuthentication ? AuthenticatedRoute : Route,
            { key: route.id, ...route, ...options },
            null
        )
    ))
}