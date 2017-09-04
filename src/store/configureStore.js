import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'

const initState = {
  entities: {
    users: {},
    repos: {}
  },
  pagination: {
    starredByUser: {}
  }
}

const configureStore = (preloadedState = initState) => {
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: preloadedState,
    strict: debug,
    actions,
    getters,
    mutations,
    plugins: debug ? [createLogger()] : []
  })

  return store
}

export default configureStore
