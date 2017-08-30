import User from '@/components/User.vue'

const API_ROOT = 'https://api.github.com/'

const callApi = (endPoint, schema) => {
  const fullUrl = (endPoint.indexOf(API_ROOT) === -1) ? API_ROOT + endPoint : endPoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }
        return json
      })
    )
}

function loadUser (login) {
  return callApi(`users/${login}`)
}
function loadStarred () {

}
export default {
  name: 'UserPage',
  components: {
    User
  },
  data () {
    return {
      user: null
    }
  },
  computed: {
    login () {
      return this.$route.params.login
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.loadData(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.loadData(this)
  },
  methods: {
    loadData ({ login, loadUser, loadStarred }) {
      // loadUser(login, [ 'name' ])
      // loadStarred(login)

      loadUser(login)
        .then(response => {
          this.user = response
        })
    },
    loadUser,
    loadStarred
  }
}

