import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home';
import Comics from './views/Comics';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/comics',
    component: Comics
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active'
});
