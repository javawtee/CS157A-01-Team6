import urls from "./urls"

import axios from "axios"

const services = {
    // background
    signedIn: () => { return axios.get(urls.user.signedin) },


    // user
    signUp: payload => { return axios.post(urls.user.signup, payload) },
    signIn: payload => { return axios.post(urls.user.signin, payload) },
    signOut: () => { return axios.get(urls.user.signout) },
    sendRecoveryLink: email => { return axios.get(`${urls.user.recoverylink}?email=${email}`) },
    confirmRecoveryLink: link => { return axios.get(`${urls.user.confirmrecoverylink}?link=${link}`) },
    updatePassword: payload => { return axios.post(urls.user.updatepassword, payload) },
    updatePreference: payload => { return axios.put(urls.user.updatepreference, payload) },
    getFlights: () => { return axios.get(urls.user.getflights) },
    getBookingDetail: bookingNumber => { return axios.get(`${urls.user.getbookingdetail}?bn=${bookingNumber}`) },
    cancelBooking: payload => { return axios.post(`${urls.user.cancelbooking}`, payload) },

    // airport
    getAirportList: () => { return axios.get(urls.airport.getlist) },

    // flight
    searchFlight: reqConditions => { return axios.get(urls.flight.searchflight + "?" + reqConditions) },
    finalizeBooking: payload => { return axios.post(urls.flight.finalizebooking, payload) },
}

export default services 