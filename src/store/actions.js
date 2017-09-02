import { CALL_API, api, Schemas } from './api'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API action 'interpreter' defined in ./api.js.
const fetchUser = login => ({
  [CALL_API]: {
    types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
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
