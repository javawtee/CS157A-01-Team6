import { all } from 'redux-saga/effects'

import backgroundSaga from './sagas/backgroundSaga'
import userSaga from './sagas/userSaga'


export default function* rootSaga(){
    yield all([backgroundSaga(), userSaga()])
}