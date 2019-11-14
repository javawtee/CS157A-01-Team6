import { all, takeLatest, call, put } from 'redux-saga/effects'
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
            UIkit.notification(`Successfully signed in as: ${retUser.first_name}`, { timeout: 2000 });
            yield put({ type: types.SET_USER, token: retUser })
            yield put({ type: types.SET_AUTHENTICATED })
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
        yield call(services.sendRecoveryLink, email)
        UIkit.modal.dialog(
            "<p class='uk-modal-body' style='color:green;'>Successfully sent recovery link. If you don't see it, please check Spam box</p>"
        )
        UIkit.modal("#forgotPassword").hide()
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
        if (e.message.endsWith('404')) {
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
        UIkit.notification("Successfully updated new password. Please sign in", { status: 'success', timeout: 3000 })
        return setTimeout(() => window.location.href = "/", 3500)
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
    ])
}