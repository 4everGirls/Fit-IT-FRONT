import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VeeValidate from "vee-validate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
