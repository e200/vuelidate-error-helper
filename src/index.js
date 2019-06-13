function install (Vue, options) {
  Vue.prototype.$VuelidateErrorHelper = {
    lang: options.lang
  }
}

export default install
