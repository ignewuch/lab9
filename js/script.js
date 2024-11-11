function init() {
  var button = document.getElementById('entrybutton');

  button.addEventListener('click', showMeText);
}

function showMeText() {
  var textbox = document.getElementById('entryinput');

  document.getElementById('textoutput').innerHTML = textbox.value;

  alert("Isabel Gnewuch: " + textbox.value);
}

window.addEventListener('load', init);
