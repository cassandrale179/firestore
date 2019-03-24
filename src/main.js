// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Importing Firebase relating stuff 


// import VueFire from 'vuefire'
import firebase from 'firebase'
import VueFire from 'vuefire' 
Vue.use(VueFire)

// Vue.config.productionTip = false
firebase.initializeApp({
  projectId: 'hystersis-69801',
  databaseURL: 'https://hystersis-69801.firebaseio.com'
})

// var usersRef = firebase.database().ref('users') 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
