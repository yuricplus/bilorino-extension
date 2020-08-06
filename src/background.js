import store from './store';

global.browser = require('webextension-polyfill');

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.tabs.executeScript(details.tabId, {
    code: 'document.body.innerHTML = document.body.innerHTML.replace(/Bolsonaro/g, "Bilorino");',
  });
});
