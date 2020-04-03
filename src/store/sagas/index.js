import mainSaga from './mainSaga'

import { all, spawn } from 'redux-saga/effects'

export default function * root () {
  yield all([
    spawn(mainSaga)
  ])
}
