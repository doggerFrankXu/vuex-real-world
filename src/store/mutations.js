import * as types from './mutation-types'
import merge from 'lodash/merge'

export default {
  [types.USER_SUCCESS] (state, payload) {
    if (payload.response && payload.response.entities) {
      state.entities = merge({}, state.entities, payload.response.entities)
    }
  },
  [types.USER_REQUEST] () {

  }
}
