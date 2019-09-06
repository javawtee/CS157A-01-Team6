import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// const initialState = {}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware]

if (process.env.NODE_ENV === 'development' && true) {
    middlewares.push(logger)
}

// const store = createStore(
//     rootReducer,
//     initialState,
//     //applyMiddleware(...middleware)
//     applyMiddleware(...middlewares)
// )
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)

export default store
