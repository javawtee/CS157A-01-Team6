import types from '../types'

const initialState = {
    token: undefined
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case types.SET_USER:
        return {...state, ...action.user}
      default:
        return state
    }
  }