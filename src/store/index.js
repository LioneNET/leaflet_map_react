import { applyMiddleware, combineReducers, createStore } from "redux"
import defaultStates from "./defaultStates"
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers(rootReducer), defaultStates, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga )

export default store