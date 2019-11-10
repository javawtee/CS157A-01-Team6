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
    flightTimeInputs: {
        fromOption: '', // flight time
        toOption: '', // flight time
    },
    numOfPassengers: 1,
    flightClassInput: '',
    maxPrice: 0,
    sortByInput: '',
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
    }
}

export default searchSession