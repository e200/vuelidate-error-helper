const messages = require('./messages')
const mixin = require('./mixin')

function plugin (Vue, options) {
  Vue.prototype.$VuelidateErrorHelper = {
    messages: options.messages
  }
}

export default plugin

export { messages, mixin }