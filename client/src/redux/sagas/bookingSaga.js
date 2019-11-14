import { all, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types';
import { flight } from 'apis/builder'
import services from 'apis/services'

function* APPLY_SEARCH({ payload }) {
    try {
        let requestCall = flight.getSearchFlightCall(payload)
        let ticketList = yield call(services.searchFlight, requestCall)
        console.log(ticketList)
        // yield put({
        //     type: "SET_APPLY_SEARCH",
        //     payload
        // })
    } catch (e) {
        alert(e.message)
    }
}

function* GO_SEARCH() {
    yield put({
        type: "SET_GO_SEARCH"
    })
}

function* IS_NEXT_RESERVATION({ tripType, selected }) {
    yield put({
        type: "SET_VALID_TO_RESERVATION",
        tripType,
        selected
    })
}

function* TO_RESERVATION() {
    yield put({
        type: "SET_TO_RESERVATION"
    })
}

export default function* bookingSaga() {
    yield all([
        takeLatest(types.APPLY_SEARCH, APPLY_SEARCH),
        takeLatest(types.GO_SEARCH, GO_SEARCH),
        takeEvery(types.IS_NEXT_RESERVATION, IS_NEXT_RESERVATION),
        takeLatest(types.TO_RESERVATION, TO_RESERVATION)
    ])
}