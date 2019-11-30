import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import types from '../types'
import services from '../../apis/services'
import UIkit from 'uikit'

function* SIGN_UP({ payload, callback }) {
    try {
        let response = yield call(services.signUp, payload)
        callback(response.data)
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* SIGN_IN({ payload }) {
    try {
        let ret = yield call(services.signIn, payload)
        if (ret && ret.data !== "") {
            let retUser = ret.data
            yield put({ type: types.SET_USER, info: { ...retUser.info }, preference: { ...retUser.preference } })
            yield put({ type: types.SET_AUTHENTICATED })
            UIkit.notification(`Successfully signed in as: ${retUser.info.firstName}`, { timeout: 2000 });
        } else {
            UIkit.notification("Email/ password is not correct", { timeout: 2000 })
        }
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* SIGN_OUT() {
    try {
        yield call(services.signOut)
        // clean up or logic after sign out
        sessionStorage.clear()
        // update state for DOM
        yield put({ type: types.SET_UNAUTHENTICATED })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* SEND_RECOVERY_LINK({ email }) {
    try {
        let retResult = yield call(services.sendRecoveryLink, email)
        if (retResult.data === "success") {
            UIkit.modal.dialog(
                "<p class='uk-modal-body' style='color:green;'>Successfully sent recovery link. If you don't see it, please check Spam box</p>"
            )
            return UIkit.modal("#forgotPassword").hide()
        }
        UIkit.notification(retResult.data, { status: 'danger', timeout: 2000 })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* CONFIRM_RECOVERY_LINK({ link }) {
    let status = false
    try {
        yield call(services.confirmRecoveryLink, link)
        status = true
    } catch (e) {
        if (e.message.endsWith("404")) {
            UIkit.notification("Recovery link expired", { status: 'danger', timeout: 3000 })
            return setTimeout(() => window.location.href = "/", 3500)
        }
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
    yield put({
        type: "SET_CONFIRM_STATUS",
        status
    })
}

function* UPDATE_PASSWORD({ payload }) {
    try {
        yield call(services.updatePassword, payload)
        UIkit.notification(`Successfully updated new password${payload.ID ? "" : ". Please sign in"}`, { status: 'success', timeout: 3000 })
        if (payload.link) {
            // for Recovery Password
            return setTimeout(() => window.location.href = "/", 3500)
        } else {
            // User update password
            UIkit.accordion("#user-profile").toggle(1) // close User Password
        }
    } catch (e) {
        if (e.message.endsWith("500")) {
            return UIkit.notification("Current Password is not correct", { status: 'danger', timeout: 2000 })
        }
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* UPDATE_PREFERENCE({ payload }) {
    try {
        yield call(services.updatePreference, payload)
        yield put({
            type: "SET_PREFERENCE",
            preference: payload
        })
        UIkit.notification(`Successfully updated preference`, { status: 'success', timeout: 3000 })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* USER_GET_FLIGHTS() {
    try {
        let retResult = yield call(services.getFlights)
        yield put({
            type: "SET_USER_FLIGHTS",
            flights: retResult.data
        })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* GET_BOOKING_DETAIL({ bookingNumber }) {
    try {
        let retResult = yield call(services.getBookingDetail, bookingNumber)
        yield put({
            type: "SET_USER_BOOKING_DETAIL",
            bookingPassengers: retResult.data
        })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

function* UPDATE_BOOKING({ id, isChecked }) {
    yield put({
        type: "SET_UPDATED_BOOKING_DETAIL",
        id,
        isChecked
    })
}

function* CANCEL_BOOKING({ path, bookingNumber, cancellations, originalList }) {
    try {
        UIkit.modal.confirm('Are you sure to cancel reservation?').then(function () {
            let isAll = cancellations.length === originalList.length
            services.cancelBooking({ isAll, bookingNumber, cancellations }).then(res => {
                if (isAll || originalList.filter(e => !e.isChecked).length === cancellations.length) {
                    UIkit.modal.dialog(
                        "<p class='uk-modal-body' style='color:green;'>Successfully cancelled booking</p>"
                    )
                    return window.location.href = "/"
                }
                window.location.href = path // DOESN'T RECOMMEND. USE AS TEMPORARY TO TRIGGER UPDATE AFTER CANCELLATION
            })
        }, function () {
            // cancel confirmation
            return
        })
    } catch (e) {
        UIkit.notification(e.message, { status: 'danger', timeout: 2000 })
    }
}

export default function* userSaga() {
    yield all([
        takeLatest(types.SIGN_UP, SIGN_UP),
        takeLatest(types.SIGN_IN, SIGN_IN),
        takeLatest(types.SIGN_OUT, SIGN_OUT),
        takeLatest(types.SEND_RECOVERY_LINK, SEND_RECOVERY_LINK),
        takeLatest(types.CONFIRM_RECOVERY_LINK, CONFIRM_RECOVERY_LINK),
        takeLatest(types.UPDATE_PASSWORD, UPDATE_PASSWORD),
        takeLatest(types.UPDATE_PREFERENCE, UPDATE_PREFERENCE),
        takeLatest(types.USER_GET_FLIGHTS, USER_GET_FLIGHTS),
        takeLatest(types.GET_BOOKING_DETAIL, GET_BOOKING_DETAIL),
        takeEvery(types.UPDATE_BOOKING, UPDATE_BOOKING),
        takeLatest(types.CANCEL_BOOKING, CANCEL_BOOKING)
    ])
}