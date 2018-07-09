const requiredMessage = 'This field is required'

export default {
  required: function () {
    return requiredMessage
  },
  requiredIf: function () {
    return requiredMessage
  },
  minLength: function (rule) {
    return `This field requires at least ${rule.min} characters`
  },
  maxLength: function (rule) {
    return `This field requires at least ${rule.max} characters`
  },
  email: function () {
    return "It doesn't look like a valid email"
  }
}