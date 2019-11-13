const initialState = {
    list: []
}

export default function airportReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_AIRPORTS":
            return { ...state, list: action.airportList }
        default:
            return state
    }
}