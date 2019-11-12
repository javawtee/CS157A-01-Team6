const sessionName = 'tkt'

const initial = {
    ticket: {
        departFlight: null,
        returnFlight: null,
    }
}

const createSession = () => {
    var session = getSession()
    if (!session) setSession(initial)
}

const setSession = session => {
    sessionStorage.setItem(sessionName, JSON.stringify(session))
}

const getSession = () => {
    return JSON.parse(sessionStorage.getItem(sessionName))
}

const searchSession = {
    getAll: () => {
        createSession()
        return getSession()
    },
    get: key => {
        var session = getSession()
        if (session) return session[key]
    },
    set: (key, value) => {
        var session = getSession()
        if (session) {
            session.ticket[key] = value
            return setSession(session)
        }
    },
    validForReservation: isRoundTrip => {
        var session = getSession()
        if (session) {
            const { departFlight, returnFlight } = session.ticket
            return (isRoundTrip && departFlight !== null && returnFlight !== null) || (!isRoundTrip && departFlight !== null)
        }
        return false
    },
    clearSession: () => setSession(initial)
}

export default searchSession