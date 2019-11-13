const types = {
    // Spinner
    LOADING: "LOADING",
    LOADED: "LOADED",

    // Background
    SIGNED_IN: "SIGNED_IN",
    SET_AUTHENTICATED: "SET_AUTHENTICATED",
    SET_UNAUTHENTICATED: "SET_UNAUTHENTICATED",

    // User
    SIGN_UP: "SIGN_UP",
    SIGN_IN: "SIGN_IN",
    SET_USER: "SET_USER",
    SIGN_OUT: "SIGN_OUT",
    SEND_RECOVERY_LINK: "RECOVERY_LINK",
    CONFIRM_RECOVERY_LINK: "CONFIRM_RECOVERY_LINK",
    UPDATE_PASSWORD: "UPDATE_PASSWORD",

    // Booking
    INIT_LOAD: "BOOKING_INIT_LOAD",
    APPLY_SEARCH: "BOOKING_APPLY_SEARCH",
    GO_SEARCH: "BOOKING_GO_SEARCH",
    IS_NEXT_RESERVATION: "BOOKING_IS_NEXT_RESERVATION",
    TO_RESERVATION: "BOOKING_TO_RESERVATION",

    // Airport
    GET_AIRPORTS: "AIRPORT_GET_LIST",
}

export default types