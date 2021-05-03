import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8QL2DYA26hi7xb4sQPSo9HYwrcGjE8E",
  authDomain: "todo-app-794c9.firebaseapp.com",
  projectId: "todo-app-794c9",
  storageBucket: "todo-app-794c9.appspot.com",
  messagingSenderId: "406616774552",
  appId: "1:406616774552:web:b66db59aea28d101dc7ded",
  measurementId: "G-RGHZMN9NDF"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
