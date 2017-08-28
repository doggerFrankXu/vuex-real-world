import Explore from '@/components/Explore.vue'
export default {
  name: 'app',
  components: { Explore },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleChange (nextValue) {
      this.$router.push(`/${nextValue}`)
    }
  }
}
