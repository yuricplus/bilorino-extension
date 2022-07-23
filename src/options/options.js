import Vue from 'vue';
import App from './App';

global.browser = require('webextension-polyfill');

console.log('teste');

alert('trieteza');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
