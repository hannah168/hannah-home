// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.getCookie = function (name) {
  let cname = name + '='
  let cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let tmpC = cookies[i]
    if (tmpC === '') {
      return ''
    }
    while (tmpC.charAt(0) === '') {
      tmpC = tmpC.substring(1)
    }
    if (tmpC.indexOf(cname) !== -1) {
      return tmpC.substring(cname.length, tmpC.length)
    }
  }
  return ''
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
