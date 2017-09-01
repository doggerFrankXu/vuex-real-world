import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

const configureStore = preloadedState => {
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: preloadedState,
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
  return store
}

export default configureStore
