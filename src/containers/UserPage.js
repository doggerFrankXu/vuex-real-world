import User from '@/components/User.vue'
export default {
  name: 'UserPage',
  components: {
    User
  },
  props: [],
  data () {
    return {
      user: {
        login: 'yyx990803',
        avatarUrl: 'https://avatars1.githubusercontent.com/u/499550?v=4',
        name: 'Evan You'
      }
    }
  },
  computed: {
    login () {
      return this.$route.params.login
    }
  }
}
