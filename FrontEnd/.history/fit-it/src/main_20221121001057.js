import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VeeValidate from "vee-validate";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});