import { all, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types';

function* APPLY_SEARCH({ payload }) {
    yield put({
        type: "SET_APPLY_SEARCH",
        payload
    })
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