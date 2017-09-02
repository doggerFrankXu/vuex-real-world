import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import {CALL_API, CALL_API_ACTION} from './api'

const debug = process.env.NODE_ENV !== 'production'

const initState = {
  entities: {
    users: {}
  }
}

const configureStore = (preloadedState = initState) => {
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state: preloadedState,
    strict: debug,
    actions: {
      ...actions,
      [CALL_API]: CALL_API_ACTION
    },
    getters,
    mutations,
    plugins: debug ? [createLogger()] : []
  })

  return store
}

export default configureStore
