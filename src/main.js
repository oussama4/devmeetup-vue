import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'

import store from './store'
import App from './App'
import router from './router'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD1GRFRrO9Uu-cbmbiQvWXVlGJPvWaVlgk',
      authDomain: 'devmeetup-vue-53284.firebaseapp.com',
      databaseURL: 'https://devmeetup-vue-53284.firebaseio.com',
      projectId: 'devmeetup-vue-53284',
      storageBucket: 'devmeetup-vue-53284.appspot.com'
    })
  }
})
