import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

global.browser = require('webextension-polyfill');

Vue.prototype.$browser = global.browser;

document.body.innerHTML = document.body.innerHTML.replace(/Bolsonaro/g, 'Bilorino');

console.log(document);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
