import Vue from 'vue'
import Home from './Home'
import router from './routes'

new Vue({
  el: '#app',
  render: h => h(Home),
  router
});
