import * as types from './mutation-types'

const API_ROOT = 'https://api.github.com/'

const callApi = (endPoint, schema) => {
  const fullUrl =
    endPoint.indexOf(API_ROOT) === -1 ? API_ROOT + endPoint : endPoint

  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
  )
}

export const loadUser = ({ commit, state }, login) => {
  const user = state.entities.users[login]
  if (user) {
    return null
  }
  commit(types.USER_REQUEST)
  return callApi(`users/${login}`)
    .then(user => {
      commit(types.USER_SUCCESS, {user})
    })
}

export const loadStarred = () => {}
