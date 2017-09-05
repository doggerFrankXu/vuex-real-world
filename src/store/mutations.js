import * as types from './mutation-types'
import merge from 'lodash/merge'
import paginate from './paginate'

export default {
  [types.USER_SUCCESS] (state, payload) {
    if (payload.response && payload.response.entities) {
      state.entities = merge({}, state.entities, payload.response.entities)
    }
  },
  [types.REPO_SUCCESS] (state, payload) {
    if (payload.response && payload.response.entities) {
      state.entities = merge({}, state.entities, payload.response.entities)
    }
  },
  [types.USER_REQUEST] () {},
  [types.REPO_REQUEST] () {},
  ...paginate({
    mapPayloadToKey: payload => payload.login,
    types: [types.STARRED_REQUEST, types.STARRED_SUCCESS, types.STARRED_FAILURE]
  }),
  ...paginate({
    mapPayloadToKey: payload => payload.fullName,
    types: [types.STARGAZERS_REQUEST, types.STARGAZERS_SUCCESS, types.STARGAZERS_FAILURE]
  }),
  [types.RESET_ERROR_MESSAGE] (state, payload) {
    state.errorMessage = payload.error
  }
}
