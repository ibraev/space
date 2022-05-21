import { put, takeEvery, all } from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log("Hello Saga")
}
export function* incrementAsync() {
    yield delay(1000)
    yield put({type: "GET"})
}

export function* watchIncrementAsync() {
    yield takeEvery("GET_ASYNC", incrementAsync())
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}