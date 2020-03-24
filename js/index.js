document.addEventListener("DOMContentLoaded", onLoad);

var text = null;

document.getElementById('color-btn-blue').addEventListener('click', function () {changeBackgroundColor('#0101d4')})
document.getElementById('color-btn-black').addEventListener('click', function () {changeBackgroundColor('black')})
document.getElementById('color-btn-green').addEventListener('click', function () {changeBackgroundColor('green')})

function changeBackgroundColor(color) {
  document.getElementsByTagName("body")[0].style.background = color;
  document.getElementsByTagName("header")[0].style.background = color;
}

function onLoad() {
  languageBtnInit()
  setTimeout(loadingEnd, 3000)
}

function languageBtnInit() {
  if (window.location.hash && window.location.hash === '#ru') {
    document.getElementById('lang-btn-ru').prepend('* ')
    loadText('ru')
  } else {
    document.getElementById('lang-btn-eng').prepend('* ')
    loadText('en')
  }
}

function loadingEnd() {
  document.getElementById('loader-container').remove();
  document.getElementById('input-container').style.display = 'block';
  textTyping();
}

function loadText(lang) {
  if (lang === 'ru') text = textRu
  if (lang === 'en') text = textEng
}

function textTyping() {
  new TypeIt("#input-container", {
    speed: 5,
    waitUntilVisible: false,
    cursor: false,
    afterComplete: async (step, instance) => {
      document.getElementById('input-container').insertAdjacentHTML('beforeend',text)
      document.getElementById('input-container').insertAdjacentHTML('beforeend',  '<div id="end-file"></div>')
      new TypeIt("#end-file", {
        speed: 5,
        waitUntilVisible: false,
        cursor: true,
      })
      .break({delay: 1000})
      .type("<b>___END OF FILE___</b>")
      .go();
    }
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
  .type("Opening file")
  .pause(500).type('.')
  .pause(500).type('.')
  .pause(500).type('.')
  .break({delay: 1000})
  .break()
  .go();


}
