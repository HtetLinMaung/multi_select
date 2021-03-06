import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);
// library.add(faCoffee)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
