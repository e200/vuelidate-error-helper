import messages from './messages'
import mixin from './mixin'

function install (Vue, options) {
  Vue.prototype.$VuelidateErrorHelper = {
    messages: options.messages
  }
}

export { messages, mixin }

export default install