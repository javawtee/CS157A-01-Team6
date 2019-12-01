import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function BookingDetailPassengers(props) {
    const dispatch = useDispatch()
    const { bookingPassengers } = useSelector(state => ({ bookingPassengers: state.user.bookingPassengers }))

    const [passengers, setPassengers] = useState(undefined)

    useEffect(() => {
        if (!passengers && bookingPassengers) {
            bookingPassengers.forEach(passenger => passenger.isChecked = false)
            setPassengers(bookingPassengers)
        }
    }, [passengers])

    const populateRows = () => passengers.map((passenger, id) => {
        let isAvailable = passenger.bookingStatus === "Normal"
        return (
            <tr key={id}
                style={{ textDecoration: !isAvailable ? "line-through" : "" }}
                uk-tooltip={!isAvailable ? "Reservation for this passenger has been cancelled" : ""}
            >
                <td className="uk-text-center">
                    <input id={id}
                        className="uk-checkbox" type="checkbox"
                        disabled={!isAvailable}
                        onChange={handleCheck} />
                </td>
                <td>{passenger.passengerId}</td>
                <td>{passenger.IDType}</td>
                <td className="uk-text-capitalize">{passenger.firstName}</td>
                <td className="uk-text-capitalize">{passenger.lastName}</td>
                <td className="uk-text-capitalize">{passenger.middleInitial}</td>
                <td>{passenger.confirmationEmail || "N/A"}</td>
            </tr >
        )
    })

    const handleCheck = e => {
        dispatch({
            type: "UPDATE_BOOKING",
            id: Number(e.target.id),
            isChecked: e.target.checked
        })
    }

    const handleCancel = () => {
        const cancellations = passengers.filter(passenger => passenger.isChecked)
        dispatch({
            type: "CANCEL_BOOKING",
            path: props.location.pathname,
            bookingNumber: props.bookingNumber,
            cancellations,
            originalList: passengers,
        })
    }


    return (
        <div className="uk-width-1-1">
            {
                passengers &&
                <React.Fragment>
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-divider">
                            <thead>
                                <tr>
                                    <th className="uk-table-shrink uk-text-center"></th>
                                    <th className="uk-table-shrink">Passenger ID</th>
                                    <th className="uk-table-shrink">ID Type</th>
                                    <th className="uk-table-shrink">First Name</th>
                                    <th className="uk-table-shrink">Last Name</th>
                                    <th className="uk-table-shrink">Middle</th>
                                    <th className="uk-width-small">Send confirmation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {populateRows()}
                            </tbody>
                        </table>
                    </div>
                    <div className="uk-margin-small-top uk-margin-left">
                        <small>Please select any passenger or all to cancel reservation</small><br />
                        <button className="uk-button uk-button-primary"
                            disabled={!passengers.filter(passenger => passenger.isChecked).length > 0}
                            onClick={handleCancel}>
                            Cancel Reservation
                        </button>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}
