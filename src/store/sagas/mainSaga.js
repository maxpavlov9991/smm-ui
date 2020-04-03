import { takeLatest, put, call } from 'redux-saga/effects'
import { LOAD_DATA, putData, putDataFail } from '../actions/mainActions'

import data from './data.json'
import { fetcher } from '../../utils'

function fetchData () {
  // return fetcher('/data')
  return data
}

function * workerLoadData () {
  try {
    const data = yield call(fetchData)
    yield put(putData(data))
  } catch (error) {
    console.log(error.message)
    yield put(putDataFail(error))
  }
}

export default function * watchLoadData () {
  yield takeLatest(LOAD_DATA, workerLoadData)
}
