// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BalmUI from 'balm-ui'; // Mandatory 

// Importing Firebase relating stuff 
import firebase from 'firebase'
import VueFire from 'vuefire' 

// Balm UI related libraries 
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/textfield.css';
import 'balm-ui/components/icon.css'; 
import 'balm-ui/components/grid.css';


// Vue explicit declaration 
Vue.use(VueFire); 
Vue.use(BalmUI);  

// Add Firebase binding here 
firebase.initializeApp({
  projectId: 'hystersis-69801',
  databaseURL: 'https://hystersis-69801.firebaseio.com'
})

// Create Vue app 
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})



// Vue.config.productionTip = false 