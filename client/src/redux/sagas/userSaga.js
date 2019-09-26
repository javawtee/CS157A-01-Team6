import { all, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types'
import user from '../../services/user'
import UIkit from 'uikit'

function* SIGNIN({ coin }) {
    let {userId, password} = coin
    let ret
    try {
        ret = yield call(user.authenticate, {userId, password})
        UIkit.notification(ret.data, {timeout: 2000});
        //yield put({type: types.SET_USER, user: ret.data})
    } catch (e) {
        alert(e)
    }
}


export default function* userSaga() {
    yield all([
        takeLatest(types.AUTH_USER, SIGNIN)
    ])
}