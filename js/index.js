document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  console.log('load')
  setTimeout(loadingEnd, 3000)
}

function loadingEnd() {
  //document.getElementById('loader').remove()
}
