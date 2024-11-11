function init() {
  var button = document.getElementById('entrybutton');

  button.addEventListener('click', showMeText);
  
  button.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      showMeText();
    }
  });
}

function showMeText() {
  var textbox = document.getElementById('entryinput');

  var headline = document.getElementById('textoutput');

  alert("Isabel Gnewuch: " + textbox.value);

  headline.innerHTML = textbox.value;
}

window.addEventListener('load', init);
