const API_ROOT = 'https://api.github.com/'

// todo // Fetches an API response and normalizes the result JSON according to schema.
// // This makes every API response have the same shape, regardless of how nested it was.
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

// Action name and attribute key that carries API call info interpreted by this Vuex action.
export const CALL_API = 'Call API'

// A Vuex action that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export const CALL_API_ACTION = ({state, commit}, action) => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

//   if (typeof endpoint === 'function') {
//     endpoint = endpoint(store.state)
//   }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
//   if (!schema) {
//     throw new Error('Specify one of the exported Schemas.')
//   }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three mutation types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected mutation types to be strings.')
  }

  const mutationWith = data => {
    const finalMutation = Object.assign({}, action, data)
    delete finalMutation[CALL_API]
    return finalMutation
  }

  const [ requestType, successType, failureType ] = types
  commit(mutationWith({type: requestType}))

  return callApi(endpoint, schema).then(
      response => commit(mutationWith({
        response,
        type: successType
      })),
      error => commit(mutationWith({
        type: failureType,
        error: error.message || 'Something bad happened'
      }))
  )
}
