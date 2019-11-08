import React from 'react';
import { format, parse, differenceInHours } from 'date-fns'

// props:
// data - required
// data.depTime (DepartTime) - required
// data.arrTime (ArriveTime) - required
// data.economy - required
// data.business - required

const getTimeIn12HourFormat = timeString => {
    const time = parse(timeString, "HH:mm", new Date())
    return (
        <React.Fragment>
            <span className="uk-text-large uk-text-bold uk-margin-small-right">{format(time, "hh:mm")}</span>
            <small>{format(time, "a")}</small>
        </React.Fragment>
    )
}

const calcDuration = (depTimeString, arrTimeString) => {
    const arrTime = parse(arrTimeString, "HH:mm", new Date())
    const depTime = parse(depTimeString, "HH:mm", new Date())
    const diffHours = differenceInHours(arrTime, depTime)
    var diffMinutes = arrTime.getMinutes() - depTime.getMinutes()
    diffMinutes = diffMinutes < 0 ? -diffMinutes : diffMinutes
    //return `${diffHours} hour${diffHours > 1 ? "s" : ""} ${diffMinutes > 0 ? `and ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}` : ""} `
    return `${diffHours}h ${diffMinutes}m`
}

export default function ResultItem(props) {
    const { depTime, arrTime, economy, business } = props.data//.reduce((prev, curr) => prev.depTime < curr.arrTime)
    const economyAvailability = economy.seats < 1
    const businessAvailability = business.seats < 1

    return (
        <div className="uk-margin-auto@s uk-margin-remove-top uk-margin-remove-bottom uk-width-1-1 uk-padding-small uk-card uk-card-default uk-card-hover" uk-grid="">
            <div className="uk-width-1-1 uk-width-1-3@m uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                <div className="uk-width-1-1 uk-margin-auto">
                    {getTimeIn12HourFormat(depTime)}
                    <span uk-icon="icon: arrow-right; ratio: 1.5" style={{ verticalAlign: "bottom" }}></span>
                    {getTimeIn12HourFormat(arrTime)}
                </div>
                <div className="uk-width-1-1">
                    <small>Duration: {calcDuration(depTime, arrTime)}</small>
                </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-3@m uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                <button className="uk-button uk-button-default uk-margin-small-right uk-margin-small-bottom"
                    disabled={economyAvailability}
                    style={{ verticalAlign: "top" }}>
                    <div className="uk-text-small uk-text-uppercase">
                        Economy
                    </div>
                    {
                        economy.seats > 0 ?
                            <React.Fragment>
                                <div style={{ margin: -5, marginBottom: -15 }}>
                                    <small style={{ verticalAlign: "super" }}>$</small>
                                    <span className="uk-text-large uk-text-bold">{economy.price}</span>
                                </div>
                                <small className="uk-text-small uk-text-lowercase uk-text-italic">
                                    {economy.seats} left
                                </small>
                            </React.Fragment>
                            :
                            <div className="uk-text-small uk-text-bold uk-text-capitalize">
                                Sold out
                            </div>
                    }
                </button>
                <button className="uk-button uk-button-primary uk-margin-small-bottom"
                    disabled={businessAvailability}
                    style={{ verticalAlign: "top" }}>
                    <div className="uk-text-small uk-text-uppercase">
                        Business
                    </div>
                    {
                        business.seats > 0 ?
                            <React.Fragment>
                                <div style={{ margin: -5, marginBottom: -15 }}>
                                    <small style={{ verticalAlign: "super" }}>$</small>
                                    <span className="uk-text-large uk-text-bold">{business.price}</span>
                                </div>
                                <small className="uk-text-small uk-text-lowercase uk-text-italic">
                                    {business.seats} left
                                </small>
                            </React.Fragment>
                            :
                            <div className="uk-text-small uk-text-bold uk-text-capitalize">
                                Sold out
                            </div>
                    }
                </button>
            </div>
        </div>
    )
}
