import { all, takeLatest, call, put } from 'redux-saga/effects'
import types from '../types'
import services from '../../apis/services'
import UIkit from 'uikit'


function* SIGNIN({ coin }) {
    let { userId, password } = coin
    try {
        let ret = yield call(services.signIn, { userId, password })
        if (ret && ret.data !== "") {
            let retUser = ret.data
            UIkit.notification(`Successfully signed in as: ${retUser.name}`, { timeout: 2000 });
            yield put({type: types.SET_USER, token: retUser})
            yield put({type: types.SET_AUTHENTICATED })
        } else {
            UIkit.notification("Email/ password is not correct", { timeout: 2000 })
        }
    } catch (e) {
        UIkit.notification(e.message, { timeout: 2000 })
    }
}

function* SIGNOUT(){
    try {
        let ret = yield call(services.signOut)
        console.log(ret)
        yield put({type: types.SET_UNAUTHENTICATED })
    } catch (e){
        alert(e)
    }
}


export default function* userSaga() {
    yield all([
        takeLatest(types.SIGN_IN, SIGNIN),
        takeLatest(types.SIGN_OUT, SIGNOUT)
    ])
}