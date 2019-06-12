import mixin from './mixin'

function install (Vue, options) {
  Vue.prototype.$VuelidateErrorHelper = {
    lang: options.lang
  }
}

export { mixin }

export default install
