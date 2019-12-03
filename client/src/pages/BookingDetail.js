import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookingDetailSummary from 'components/BookingDetail/BookingDetailSummary'
import BookingDetailPassengers from '../components/BookingDetail/BookingDetailPassengers';

export default function BookingDetail(props) {
    const bookingDetails = props.computedMatch.params.detail.split('_')
    const bookingNumber = bookingDetails[0]
    const [departFrom, departTime] = bookingDetails[1].split('|')
    const [arriveTo, arriveTime] = bookingDetails[2].split('|')

    const dispatch = useDispatch()
    const { bookingPassengers } = useSelector(state => ({
        bookingPassengers: state.user.bookingPassengers
    }))

    const [initialLoaded, setInitialLoaded] = useState(false)

    useEffect(() => {
        if (!initialLoaded) {
            dispatch({
                type: "GET_BOOKING_DETAIL",
                bookingNumber
            })
            setInitialLoaded(true)
        }
    }, [initialLoaded, bookingNumber])

    return (
        <div className="uk-width-1-1 uk-margin-top" style={{ background: "white" }} uk-grid="">
            <h4>Booking Detail Summary</h4>
            <BookingDetailSummary
                DEPART_FROM={departFrom}
                ARRIVE_TO={arriveTo}
                DEPART_TIME={departTime}
                ARRIVE_TIME={arriveTime}
            />
            {
                bookingPassengers &&
                <BookingDetailPassengers {...props} bookingNumber={bookingNumber} />
            }
        </div>
    )
}
