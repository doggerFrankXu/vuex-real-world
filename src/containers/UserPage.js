import { mapActions, mapState } from 'vuex'
import User from '@/components/User.vue'
import List from '@/components/List.vue'
import Repo from '@/components/Repo.vue'
import zip from 'lodash/zip'

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
      },
      items (state) {
        const {
          entities: { users, repos }
        } = state
        const starredRepos = this.starredPagination.ids.map(id => repos[id])
        const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

        return zip(starredRepos, starredRepoOwners)
      }
    }),
    user () {
      return this.$store.getters.user(this.login)
    },
    login () {
      return this.$route.params.login.toLowerCase()
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

