document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  console.log('load')
  languageBtnInit()
  setTimeout(loadingEnd, 3000)
}

function languageBtnInit() {
  if (window.location.hash && window.location.hash === '#ru') {
    document.getElementById('lang-btn-ru').prepend('* ')
  } else {
    document.getElementById('lang-btn-eng').prepend('* ')
  }
}

function loadingEnd() {
  document.getElementById('loader-container').remove();
  document.getElementById('input-container').style.display = 'block';
  introType();
}

function introType() {
  new TypeIt("#input-container", {
    strings: ["This is a great string.", "But here is a better one."],
    speed: 50,
    waitUntilVisible: false
  }).go();
}
