import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/firebase.js'

Vue.config.productionTip = false

//ここで.envへのパスをつないでいる
require("dotenv").config({ path: __dirname + "../../.env" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
