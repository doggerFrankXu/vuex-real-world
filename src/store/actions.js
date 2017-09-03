import { CALL_API, api, Schemas } from './api'
import * as types from './mutation-types'

// Fetches a single user from Github API.
// Relies on the custom API action 'interpreter' defined in ./api.js.
const fetchUser = login => ({
  [CALL_API]: {
    types: [types.USER_REQUEST, types.USER_SUCCESS, types.USER_FAILURE],
    endpoint: `users/${login}`,
    schema: Schemas.USER
  }
})

// Fetches a single user from Github API unless it is cached.
// Relies on the custom API action 'interpreter' defined in ./api.js.
export const loadUser = (store, login) => {
  const { state } = store
  const user = state.entities.users[login]
  if (user) {
    return null
  }

  return api(store, fetchUser(login))
}

export const loadStarred = () => {}
