import { all, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types';
import bookingSession from 'sessions/bookingSession';
import searchSession from 'sessions/searchSession';
import flightSession from 'sessions/flightSession';

function* INIT_LOAD() {
    yield bookingSession.createSession()
    yield flightSession.createSession()
    yield put({
        type: "SET_BOOKING_LOAD",
        bookingSession,
        searchSession,
        flightSession
    })
}

function* APPLY_SEARCH({ payload }) {
    yield call(() => searchSession.setMultiple({ ...payload }))
    yield put({
        type: "SET_APPLY_SEARCH",
        payload
    })
    bookingSession.navNext()
}

function* GO_SEARCH() {
    bookingSession.navTo(0)
    flightSession.clearSession()
    yield put({
        type: "SET_GO_SEARCH"
    })
}

function* IS_NEXT_RESERVATION({ tripType, selected }) {
    yield flightSession.set(tripType, selected)
    yield put({
        type: "SET_VALID_TO_RESERVATION",
        flightSession
    })
}

function* TO_RESERVATION() {
    bookingSession.navNext()
    yield put({
        type: "SET_TO_RESERVATION"
    })
}

export default function* bookingSaga() {
    yield all([
        takeEvery(types.INIT_LOAD, INIT_LOAD),
        takeLatest(types.APPLY_SEARCH, APPLY_SEARCH),
        takeLatest(types.GO_SEARCH, GO_SEARCH),
        takeEvery(types.IS_NEXT_RESERVATION, IS_NEXT_RESERVATION),
        takeLatest(types.TO_RESERVATION, TO_RESERVATION)
    ])
}