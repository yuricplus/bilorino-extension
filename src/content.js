function init() {
  if (document.body.innerHTML.includes('Bolsonaro')) {
    document.body.innerHTML = document.body.innerHTML.replace(/Bolsonaro/g, 'Bilorino');
  }
}

init();
