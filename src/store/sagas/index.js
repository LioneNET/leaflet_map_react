import axios from 'axios'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import actionTypes from './../types/index'

const $api = axios.create({
  baseURL: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/'
})

const fetchPathByPoints = async (state) => {
  const { start: { location: positionA }, end: { location: positionB } } = state.data
  const res = await $api.get(`${positionA[1]},${positionA[0]};${positionB[1]},${positionB[0]}?overview=false&alternatives=true&steps=true`)
  const { routes: [{ legs: [{ steps }] }] } = res.data
  return steps
}

export function* workerSagaGetPath(state) {
  const { start, end } = state.data
  const steps = yield call(fetchPathByPoints, state)
  const points = steps.map(item => item.maneuver.location.reverse())
  yield put({ type: actionTypes.SET_PATH, data: points })
  yield put({ type: actionTypes.SET_MARKER_POINTS, data: { start: start.location, end: end.location } })
}

export function* watchRowClickSaga() {
  yield takeEvery(actionTypes.SET_POSITION, workerSagaGetPath)
}

export default function* rootSaga() {
  yield fork(watchRowClickSaga)
}