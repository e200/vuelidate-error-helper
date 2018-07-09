export default {
  props: {
    validator: Object
  },
  computed: {
    hasError: function () {
      const validator = this.validator

      return validator && validator.$dirty && validator.$error
    },
    firstError: function () {
      const validator = this.validator

      if (validator) {
        for (var rule in validator.$params) {
          if (validator[rule] === false) {
            return this.$VuelidateErrorHelper.messages[rule](validator.$params[rule])
          }
        }
      }
    }
  }
}