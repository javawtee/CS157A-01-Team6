import { all } from 'redux-saga/effects'

import backgroundSaga from './sagas/backgroundSaga'
import userSaga from './sagas/userSaga'
import bookingSaga from './sagas/bookingSaga'
import airportSaga from './sagas/airportSaga'


export default function* rootSaga() {
    yield all([backgroundSaga(), userSaga(), bookingSaga(), airportSaga()])
}