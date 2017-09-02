import { CALL_API } from './api'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom CALL_API action defined in ./api.js.
const fetchUser = (dispatch, login) => {
  return dispatch(CALL_API, {
    [CALL_API]: {
      types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
      endpoint: `users/${login}`
    }
  })
}

// Fetches a single user from Github API unless it is cached.
// Relies on Vuex action.
export const loadUser = ({ dispatch, state }, login) => {
  const user = state.entities.users[login]
  if (user) {
    return null
  }
  return fetchUser(dispatch, login)
}

export const loadStarred = () => {}
