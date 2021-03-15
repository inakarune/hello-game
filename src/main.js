import Vue from 'vue'

import App from './App.vue'
import Login from './Login.vue';
import Room from './Room.vue'
import Game from './Game.vue';
import VueRouter from 'vue-router';

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/room', name: 'room', component: Room },
  { path: '/game', name: 'game', component: Game }
];

Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
