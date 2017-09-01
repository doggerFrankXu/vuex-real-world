import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.USER_SUCCESS] (state, {user}) {
    Vue.set(state.entities.users, user.login, user)
  },
  [types.USER_REQUEST] () {

  }
}
