import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/firebase.js'
import './styles/shared.scss'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

//ここで.envへのパスをつないでいる
require("dotenv").config({ path: __dirname + "../../.env" });

Vue.use(MavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
