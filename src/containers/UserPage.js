export default {
  name: 'UserPage',
  props: [],
  data () {
    return {
      user: ''
    }
  },
  computed: {
    login () {
      return this.$route.params.login
    }
  }
}
