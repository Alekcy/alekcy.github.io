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
    speed: 5,
    waitUntilVisible: false
  })
  .type("Loading complete")
  .break({delay: 1000})
  .type("Check access")
  .pause(500).type('.')
  .pause(500).type('.')
  .pause(500).type('.')
  .break({delay: 1000})
  .type("Access granted")
  .break().break()
  .type("First name: Aleksey")
  .break({delay: 1000})
  .type("Last name: Volkov")
  .break({delay: 1000})
  .type("Country: Russia")
  .break({delay: 1000})
  .type("Birth date: 08.09.1998")
  .break({delay: 1000})
  .break({delay: 1000})
  .type("<b style='font-size: 30px;'>Work experience:</b>")
  .break({delay: 1000})
  .type(" * Angels IT. FullStack Web Developer")
  .break({delay: 1000})
  .type("   October 2017 — august 2019")
  .break({delay: 1000})
  .type("-  Developed from scratch a large SPA project on JS (MOBX), as well as a backend and admin panel on Symfony.")
  .break({delay: 1000})
  .type("-  A system for developing navigation in stores for convenient product searches.")
  .break({delay: 1000})
  .type("-  Take part in the development of two applications on React native.")
  .break({delay: 1000})
  .break({delay: 1000})
  .type("<b style='font-size: 30px;'>__END OF FILE__</b>")
  .go();



}
