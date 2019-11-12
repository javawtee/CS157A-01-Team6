import types from "../types"

const initialState = {
    authenticated: null,
    loading: false,
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_AUTHENTICATED:
            return { ...state, authenticated: true }
        case types.SET_UNAUTHENTICATED:
            return { ...state, authenticated: false }
        default:
            return state
    }
}