import store from './store';

global.browser = require('webextension-polyfill');

chrome.webNavigation.onCompleted.addListener(
  function(details) {
    chrome.tabs.executeScript(details.tabId, {
      code: 'document.body.innerHTML = document.body.innerHTML.replace(/Bolsonaro/g, "Bilorino");',
    });
  },
  {
    url: [
      {
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: 'google.com',
      },
    ],
  }
);
