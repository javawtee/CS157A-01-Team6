import React from 'react';
import { format } from "date-fns";

export default function FlightTable(props) {

    console.log(props.data)

    const populateTableRows = props.data.map((row, id) =>
        <tr key={id}>
            <td className="uk-table-link">
                <a href={`/booking=${row.bookingNumber}_${row.departFrom}|${row.departTime}_${row.arriveTo}|${row.arriveTime}`}>
                    {row.bookingNumber}
                </a>
            </td>
            <td>{row.departFrom}</td>
            <td>{format(new Date(row.departTime), "MM/dd/yyyy hh:mm a")}</td>
            <td>{row.arriveTo}</td>
            <td>{format(new Date(row.arriveTime), "MM/dd/yyyy hh:mm a")}</td>
        </tr>
    )

    return (
        <div className="uk-overflow-auto uk-margin-small-bottom">
            <table className="uk-table uk-table-responsive uk-table-divider uk-text-small">
                <caption><h4>{props.caption}</h4></caption>
                {
                    props.data.length > 0 ?
                        <React.Fragment>
                            <thead>
                                <tr>
                                    <th className="uk-width-small">Booking Number</th>
                                    <th className="uk-table-expand">Depart From</th>
                                    <th>Depart Time</th>
                                    <th className="uk-table-expand">Arrive To</th>
                                    <th>Arrive Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {populateTableRows}
                            </tbody>
                        </React.Fragment>
                        :
                        <thead>
                            <tr>
                                <th className="uk-table-expand">Found no record</th>
                            </tr>
                        </thead>
                }
            </table>
        </div>
    )
}