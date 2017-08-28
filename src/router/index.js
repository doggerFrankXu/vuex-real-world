import Vue from 'vue'
import Router from 'vue-router'
import UserPage from '@/containers/UserPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:login',
      name: 'UserPage',
      component: UserPage
    }
  ]
})
