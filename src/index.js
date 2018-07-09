const install = function (Vue, options) {
  Vue.prototype.$VuelidateErrorHelper = {
    messages: options.messages
  }
}

export const VuelidateErrorHelper = install

export default install