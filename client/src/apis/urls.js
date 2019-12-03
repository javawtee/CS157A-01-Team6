const AppRoot = "/api"
const userRoot = "/api/user"
const airportRoot = "/api/airport"
const flightRoot = "/api/flight"

const urls = {
    App: {
        load: `${AppRoot}`,
    },
    user: {
        signedin: `${userRoot}/signedin`,
        signup: `${userRoot}/signup`,
        signin: `${userRoot}/signin`,
        signout: `${userRoot}/signout`,
        recoverylink: `${userRoot}/recoverylink`,
        confirmrecoverylink: `${userRoot}/confirmrecoverylink`,
        updatepassword: `${userRoot}/updatepassword`,
        updatepreference: `${userRoot}/updatepreference`,
        getflights: `${userRoot}/getflights`,
        getbookingdetail: `${userRoot}/getbookingdetail`,
        cancelbooking: `${userRoot}/cancelbooking`,
    },
    airport: {
        getlist: `${airportRoot}`
    },
    flight: {
        searchflight: `${flightRoot}`,
        finalizebooking: `${flightRoot}/finalizebooking`
    },
}

export default urls