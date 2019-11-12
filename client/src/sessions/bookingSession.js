const sessionName = 'bk'

const initial = {
    current: 0 // current component: Search -> Result -> Reservation
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

const get = key => {
    var session = getSession()
    if (session) return session[key]
}

const set = (key, value) => {
    var session = getSession()
    if (session) {
        session[key] = value
        return setSession(session)
    }
}

const bookingSession = {
    getAll: () => {
        createSession()
        return getSession()
    },
    get: key => {
        var session = getSession()
        if (session) return session[key]
    },
    navNext: () => {
        set("current", get("current") + 1)
    },
    navTo: i => {
        set("current", i)
    },
}

export default bookingSession