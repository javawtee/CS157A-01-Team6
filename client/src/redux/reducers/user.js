import types from '../types'

const initialState = {
  token: undefined,
  confirmedRecoveryLink: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, ...action.user }
    case "SET_CONFIRM_STATUS":
      return { ...state, confirmedRecoveryLink: action.status }
    default:
      return state
  }
}