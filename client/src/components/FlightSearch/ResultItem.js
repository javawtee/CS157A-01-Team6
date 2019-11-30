import React from 'react';
import { getTimeIn12HourFormat, calcDuration } from 'utils/datetime'
// props:
// data - required
// data.depTime (DepartTime) - required
// data.arrTime (ArriveTime) - required
// data.economy - required
// data.business - required

export default function ResultItem(props) {
    const { id, selected, type, handleSelectFlight, handleChangeFlight } = props
    const { depTime, arrTime } = props.data
    const economy = { price: props.data.ecoPrice, seats: props.data.ecoSeats }
    const business = { price: props.data.busPrice, seats: props.data.busSeats }
    const economyAvailability = economy && economy.seats < 1
    const businessAvailability = business && business.seats < 1

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
            {
                selected && selected === true ?
                    <div className="uk-width-1-1 uk-width-1-3@m uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                        <button
                            className={`uk-button uk-margin-small-bottom uk-padding-small uk-button-${economy ? 'default' : 'primary'}`}
                            disabled={true}
                        >
                            {
                                economy.price ?
                                    <React.Fragment>
                                        <div className="uk-text-small uk-text-uppercase">
                                            Economy
                                        </div>
                                        <div style={{ margin: -5, marginBottom: -15 }}>
                                            <small style={{ verticalAlign: "super" }}>$</small>
                                            <span className="uk-text-large uk-text-bold">{economy.price}</span>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <div className="uk-text-small uk-text-uppercase">
                                            Business
                                        </div>
                                        <div style={{ margin: -5, marginBottom: -15 }}>
                                            <small style={{ verticalAlign: "super" }}>$</small>
                                            <span className="uk-text-large uk-text-bold">{business.price}</span>
                                        </div>
                                    </React.Fragment>
                            }
                        </button>
                        <button
                            className="uk-button uk-button-default uk-margin-small-bottom uk-margin-small-left"
                            onClick={handleChangeFlight}
                        >
                            Change
                        </button>
                    </div>
                    :
                    <div className="uk-width-1-1 uk-width-1-3@m uk-padding uk-padding-remove-top uk-padding-remove-bottom">
                        <button className="uk-button uk-button-default uk-margin-small-right uk-margin-small-bottom"
                            disabled={economyAvailability}
                            style={{ verticalAlign: "top" }}
                            onClick={() => handleSelectFlight(`${type}-economy-${id}`)}
                        >
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
                            style={{ verticalAlign: "top" }}
                            onClick={() => handleSelectFlight(`${type}-business-${id}`)}
                        >
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
            }
        </div>
    )
}
