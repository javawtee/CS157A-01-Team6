const sessionName = 'srch'

const initial = {
    isRoundTrip: false,
    searchInputs: {
        flightFrom: '',
        flightTo: '',
    },
    dateInputs: {
        fromDate: '',
        toDate: ''
    },
    arriveTimeId: '',
    departTimeId: '',
    numOfPassengers: 1,
    flightClassId: '',
    maxPrice: 0,
    sortById: '',
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
        createSession()
        var session = getSession()
        if (session) {
            session[key] = value
            return setSession(session)
        }
    },
    // els is an object of pairs of key and value
    setMultiple: el => {
        createSession()
        var session = getSession()
        if (session) {
            Object.keys(el).forEach(key => {
                session[key] = el[key]
            });
            return setSession(session)
        }
    },
    remove: () => {
        sessionStorage.removeItem(sessionName)
    }
}

export default searchSession