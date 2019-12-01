import { all, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types';
import { flight } from 'apis/builder'
import services from 'apis/services'
import UIkit from 'uikit'
import searchSession from "sessions/searchSession"

function* APPLY_SEARCH({ inputs }) {
    let payload = inputs
    let isReload = false
    try {
        if (!payload) { // case when user refresh Booking page at current step: Select Ticket for reservation
            isReload = true // to prevent navigate to next step in booking
            payload = {
                isRoundTrip: searchSession.get("isRoundTrip"),
                searchInputs: {
                    flightFrom: searchSession.get("searchInputs").flightFrom,
                    flightTo: searchSession.get("searchInputs").flightTo,
                },
                maxPrice: searchSession.get("maxPrice"),
                dateInputs: {
                    fromDate: new Date(searchSession.get("dateInputs").fromDate),
                    toDate: new Date(searchSession.get("dateInputs").toDate)
                },
                departTimeId: searchSession.get("departTimeId"),
                arriveTimeId: searchSession.get("arriveTimeId"),
                numOfPassengers: searchSession.get("numOfPassengers"),
                flightClassId: searchSession.get("flightClassId"),
                sortById: searchSession.get("sortById"),
            }
        }
        let requestCall = flight.getSearchFlightCall(payload)
        let retPayload = yield call(services.searchFlight, requestCall)// ticketList = {departFlights, returnFlights}
        yield put({
            type: "SET_APPLY_SEARCH",
            payload, // search parameters
            ticketList: retPayload.data,
            isReload
        })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    } finally {
        payload = null
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

function* FINALIZE_BOOKING({ payload }) {
    try {
        yield call(services.finalizeBooking, payload)
        yield put({
            type: "SET_FINALIZE_BOOKING"
        })
        UIkit.modal.dialog(
            "<p class='uk-modal-body' style='color:green;'>Thanks for choosing our flight service</p>"
        )
        window.location.href = "/"
    } catch (e) {
        console.log(e)
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

export default function* bookingSaga() {
    yield all([
        takeLatest(types.APPLY_SEARCH, APPLY_SEARCH),
        takeLatest(types.GO_SEARCH, GO_SEARCH),
        takeEvery(types.IS_NEXT_RESERVATION, IS_NEXT_RESERVATION),
        takeLatest(types.TO_RESERVATION, TO_RESERVATION),
        takeLatest(types.FINALIZE_BOOKING, FINALIZE_BOOKING)
    ])
}