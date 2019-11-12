import { all, takeEvery, call, put } from 'redux-saga/effects'
import types from '../types'
import services from '../../apis/services'

function* SIGNED_IN() {
    let ret = yield call(services.signedIn)
    if (ret.data !== "") {
        yield put({ type: types.SET_AUTHENTICATED })
    } else {
        yield put({ type: types.SET_UNAUTHENTICATED })
    }
}

export default function* backgroundSaga() {
    yield all([
        SIGNED_IN()
    ])
}