import bookingSession from 'sessions/bookingSession';
import searchSession from 'sessions/searchSession';
import ticketSession from 'sessions/ticketSession';

const initialState = {
    ...bookingSession.getAll(),
    ...searchSession.getAll(),
    ...ticketSession.getAll(),
    validForReservation: ticketSession.validForReservation(searchSession.get('isRoundTrip')),
    departFlights: undefined,
    returnFlights: undefined,
    searchResultsLoaded: false
}

export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_APPLY_SEARCH": // after apply, move to next Step in Booking
            searchSession.setMultiple({ ...action.payload })
            var current = state.current
            if (!action.isReload) {
                bookingSession.navNext()
                current += 1
            }
            return { ...state, ...action.payload, ...action.ticketList, current, searchResultsLoaded: true }
        case "SET_VALID_TO_RESERVATION":
            ticketSession.set(action.tripType, action.selected)
            var validForReservation = ticketSession.validForReservation(state.isRoundTrip)
            return { ...state, ...ticketSession.getAll(), validForReservation }
        case "SET_TO_RESERVATION": // after apply, move to next Step in Booking
            bookingSession.navNext()
            return { ...state, current: state.current + 1 }
        case "SET_GO_SEARCH":
            bookingSession.navTo(0)
            ticketSession.clearSession()
            return { ...state, ticket: { departFlight: null, returnFlight: null }, current: 0 }
        case "SET_FINALIZE_BOOKING":
            // clear all session for booking
            bookingSession.remove()
            searchSession.remove()
            ticketSession.remove()
            return { ...state }
        default:
            return { ...state }
    }
}