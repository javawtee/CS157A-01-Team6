const sessionName = 'flt'

const initial = {
    departFlight: null,
    returnFlight: null,
}

const setSession = session => {
    sessionStorage.setItem(sessionName, JSON.stringify(session))
}

const getSession = () => {
    return JSON.parse(sessionStorage.getItem(sessionName))
}

const searchSession = {
    createSession: () => {
        var session = getSession()
        if (!session) setSession(initial)
    },
    getAll: () => {
        return getSession()
    },
    get: key => {
        var session = getSession()
        if (session) return session[key]
    },
    set: (key, value) => {
        var session = getSession()
        if (session) {
            session[key] = value
            return setSession(session)
        }
    },
    validForReservation: isRoundTrip => {
        var session = getSession()
        if (session) {
            const { departFlight, returnFlight } = session
            return (isRoundTrip && departFlight !== null && returnFlight !== null) || (!isRoundTrip && departFlight !== null)
        }
        return false
    },
    clearSession: () => setSession(initial)
}

export default searchSession