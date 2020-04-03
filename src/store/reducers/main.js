import { LOAD_DATA, PUT_DATA, PUT_DATA_FAIL } from '../actions/mainActions'

import { cloneDeep } from 'lodash'

export const initialState = {
  status: null,
  data: []
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        status: 'loading',
        data: [].concat(cloneDeep(state.data))
      }
    }
    case PUT_DATA: {
      return {
        status: null,
        data: [].concat(cloneDeep(action.payload.data))
      }
    }
    case PUT_DATA_FAIL: {
      return {
        status: 'fail',
        data: []
      }
    }
    default:
      return state
  }
}

export default main
