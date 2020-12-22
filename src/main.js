import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/firebase.js'
import './styles/shared.scss'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import firebase from 'firebase'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

//ここで.envへのパスをつないでいる
require("dotenv").config({ path: __dirname + "../../.env" });

Vue.use(MavonEditor)
Vue.use(Notifications)
new Vue({
  router,
  store,
  data: () => ({
    currentUser: null,
    isAdmin: false
  }),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.currentUser = user
      if( user !== null) this.isAdmin = true
      else this.isAdmin = false
    })
  },
  render: h => h(App)
}).$mount('#app')
