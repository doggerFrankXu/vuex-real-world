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

// Fetches a page of starred repos by a particular user.
// Relies on the custom API action 'interpreter' defined in ./api.js.
const fetchStarred = (login, nextPageUrl) => ({
  login,
  [CALL_API]: {
    types: [ types.STARRED_REQUEST, types.STARRED_SUCCESS, types.STARRED_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.REPO_ARRAY
  }
})

// Fetches a page of starred repos by a particular user.
// Bails out if page is cached and user didn't specifically request next page.
// Relies on the custom API action 'interpreter' defined in ./api.js.
export const loadStarred = (store, [login, nextPage]) => {
  const {
    nextPageUrl = `users/${login}/starred`,
    pageCount = 0
  } = store.state.pagination.starredByUser[login] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return api(store, fetchStarred(login, nextPageUrl))
}
