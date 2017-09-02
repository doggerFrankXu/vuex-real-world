import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.USER_SUCCESS] (state, payload) {
    if (payload.response) {
      Vue.set(state.entities.users, payload.response.login, payload.response)
    }
  },
  [types.USER_REQUEST] () {

  }
}
