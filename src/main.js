import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDRqehA2DSfntEBPoStYoukeTR8T2a0sZY",
  authDomain: "c3-officialsite.firebaseapp.com",
  databaseURL: "https://c3-officialsite.firebaseio.com",
  projectId: "c3-officialsite",
  storageBucket: "c3-officialsite.appspot.com",
  messagingSenderId: "1054658532963",
  appId: "1:1054658532963:web:4ea6ccd87cb94615184a56",
  measurementId: "G-S3HT2Z6MX7"
  }

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
