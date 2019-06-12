export default {
  methods: {
    hasError: function (validator) {
      return validator && validator.$dirty && validator.$error
    },
    firstError: function (validator) {
      if (validator && validator.$dirty) {
        for (var rule in validator.$params) {
          if (validator[rule] === false) {
            return this.$VuelidateErrorHelper.lang.messages[rule](validator.$params[rule])
          }
        }
      }
    },
  }
}
