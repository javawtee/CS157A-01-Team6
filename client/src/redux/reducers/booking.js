const initialState = {
    current: 0, // current component: Search -> Result -> Reservation
    isRoundTrip: true,
    searchInputs: {
        flightFrom: '',
        flightTo: '',
    },
    dateInputs: {
        fromDate: '',
        toDate: ''
    },
    flightTimeInputs: {
        fromOption: '', // flight time
        toOption: '', // flight time
    },
    numOfPassengers: 1,
    flightClassInput: '',
    maxPrice: 0,
    sortByInput: '',
    validForReservation: false,
    ticket: {
        departFlight: null,
        returnFlight: null,
    },
}

export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_BOOKING_LOAD":
            var { bookingSession, searchSession, flightSession } = action
            var validForReservation = flightSession.validForReservation(searchSession.get('isRoundTrip'))
            var ticketFromSession = flightSession.getAll()
            var ticket = ticketFromSession === null ? state.ticket : ticketFromSession
            return { ...state, ...bookingSession.getAll(), ...searchSession.getAll(), ticket, validForReservation }
        case "SET_APPLY_SEARCH": // after apply, move to next Step in Booking
            return { ...state, ...action.payload, current: state.current + 1 }
        case "SET_VALID_TO_RESERVATION":
            validForReservation = action.flightSession.validForReservation(state.isRoundTrip)
            return { ...state, ticket: { ...action.flightSession.getAll() }, validForReservation }
        case "SET_TO_RESERVATION": // after apply, move to next Step in Booking
            return { ...state, current: state.current + 1 }
        case "SET_GO_SEARCH":
            return { ...state, ticket: { departFlight: null, returnFlight: null }, current: 0 }
        default:
            return state
    }
}