import { mapActions, mapState } from 'vuex'
import User from '@/components/User.vue'
import List from '@/components/List.vue'
import Repo from '@/components/Repo.vue'

export default {
  name: 'UserPage',
  components: {
    User,
    List,
    Repo
  },
  computed: {
    ...mapState({
      starredPagination (state) {
        return state.pagination.starredByUser[this.login]
      }
    }),
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
      loadStarred([login])
    },
    handleLoadMoreClick () {
      this.loadStarred([this.login, true])
    }
  }
}

