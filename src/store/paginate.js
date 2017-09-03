import union from 'lodash/union'
import fromPairs from 'lodash/fromPairs'
import Vue from 'vue'
const paginate = ({types, mapPayloadToKey}) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapPayloadToKey !== 'function') {
    throw new Error('Expected mapPayloadToKey to be a function.')
  }
  const [ requestType, successType, failureType ] = types

  // todo not update whole subStarredByUserState
  const updatePagination = (subStarredByUserState = {
    isFetching: false,
    nextPageUrl: undefined,
    pageCount: 0,
    ids: []
  }, payload, type) => {
    switch (type) {
      case requestType:
        return {
          ...subStarredByUserState,
          isFetching: true
        }
      case successType:
        return {
          ...subStarredByUserState,
          isFetching: false,
          ids: union(subStarredByUserState.ids, payload.response.result),
          nextPageUrl: payload.response.nextPageUrl,
          pageCount: subStarredByUserState.pageCount + 1
        }
      case failureType:
        return {
          ...subStarredByUserState,
          isFetching: false
        }
      default:
        return subStarredByUserState
    }
  }

  const mutationGenerator = type => {
    return (state, payload) => {
      let starredByUserState = state.pagination.starredByUser

      const key = mapPayloadToKey(payload)
      if (typeof key !== 'string') {
        throw new Error('Expected key to be a string.')
      }

      Vue.set(starredByUserState, key, updatePagination(starredByUserState[key], payload, type))
    }
  }

  return fromPairs(types.map(type => [
    type,
    mutationGenerator(type)
  ]))
}
export default paginate
