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


export default function* userSaga() {
    yield all([
        takeLatest(types.SIGN_UP, SIGN_UP),
        takeLatest(types.SIGN_IN, SIGN_IN),
        takeLatest(types.SIGN_OUT, SIGN_OUT)
    ])
}