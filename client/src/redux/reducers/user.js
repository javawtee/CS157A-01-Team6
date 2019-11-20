import types from "../types";
import converter from "utils/converter"
import flightTimeOptions from 'models/flightTimeOptions';
import flightClassOptions from 'models/flightClassOptions';
import sortByOptions from 'models/sortByOptions';

const initialState = {
  info: null,
  preference: null,
  confirmedRecoveryLink: false,
  DEFAULT_MAX_PRICE: 2000,
}

const getPreference = payload => {
  return {
    departTime: converter.optionIdToText(flightTimeOptions, payload.departTimeId),
    arriveTime: converter.optionIdToText(flightTimeOptions, payload.arriveTimeId),
    flightClass: converter.optionIdToText(flightClassOptions, payload.flightClassId),
    maxPrice: payload.maxPrice,
    sortBy: converter.optionIdToText(sortByOptions, payload.sortById),
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        info: { ...action.info },
        preference: getPreference(action.preference)
      }
    case "SET_CONFIRM_STATUS":
      return { ...state, confirmedRecoveryLink: action.status }
    case "SET_PREFERENCE":
      return { ...state, preference: getPreference(action.preference) }
    default:
      return state
  }
}