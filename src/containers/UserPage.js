import { mapActions } from 'vuex'
import User from '@/components/User.vue'

export default {
  name: 'UserPage',
  components: {
    User
  },
  computed: {
    user () {
      return this.$store.getters.user(this.login)
    },
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
    ...mapActions([
      'loadUser',
      'loadStarred'
    ]),
    loadData ({ login, loadUser, loadStarred }) {
      // loadUser(login, [ 'name' ])
      // loadStarred(login)

      loadUser(login)
    }
  }
}

