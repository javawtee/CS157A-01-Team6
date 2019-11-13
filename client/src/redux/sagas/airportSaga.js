import { all, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types';
import services from "apis/services"

function* GET_AIRPORTS() {
    try {
        let list = yield call(services.getAirportList)
        let airportList = []
        list.data.map(e => {
            return airportList.push(`${e.name}, ${e.code} (${e.city}, ${e.state})`)
        })
        yield put({
            type: "SET_AIRPORTS",
            airportList
        })
    } catch (e) {
        alert(e.message)
    }
}

export default function* airportSaga() {
    yield all([
        takeLatest(types.GET_AIRPORTS, GET_AIRPORTS)
    ])
}