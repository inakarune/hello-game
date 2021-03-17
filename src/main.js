import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';

import App from './App.vue'
import Login from './Login.vue';
import Room from './Room.vue'
import Game from './Game.vue';
import AdminLogin from './AdminLogin.vue';
import Admin from './Admin.vue';

import VueRouter from 'vue-router';
import io from 'socket.io-client';
const socket = io('http://localhost:7777');

const routes = [
  { path: '/', redirect: '/login', name: 'home' },
  { path: '/login', name: 'login', component: Login },
  { path: '/room', name: 'room', component: Room },
  { path: '/game/:room', name: 'game', component: Game },
  { path: '/a_login', name: 'admin login', component: AdminLogin },
  { path: '/admin', name: 'admin', component: Admin }
];

Vue.prototype.$socket = socket;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
