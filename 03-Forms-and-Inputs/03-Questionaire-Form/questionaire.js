var questForm = document.getElementById('questionaire-form'),
flavors = document.querySelector('.flavors'),
flavorButton = document.querySelectorAll('input[type=radio]'),
choice = document.getElementById('choice');

var errorDiv = document.createElement('div'),
emphasis = document.createElement('em'),
errorEmphasis = document.createTextNode("Error: "),
errorSentence = document.createTextNode(" empty or insufficient input.");

emphasis.appendChild(errorEmphasis);
errorDiv.appendChild(emphasis);
errorDiv.appendChild(errorSentence);

questForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var checkedInput = [];

  [].forEach.call(flavorButton, function(el) {

    if (!el.checked) {
      checkedInput.push(true);
      if (checkedInput.length === flavorButton.length) {
        flavors.classList.add('invalid');
      }
    }
  });

  if (validator.isEmpty(choice.value) || !isNaN(choice.value)) {
    choice.classList.add('invalid');
  };

  if (flavors.classList.contains('invalid') || choice.classList.contains('invalid')) {
    errorDiv.classList.add('error-banner');
    questForm.insertAdjacentElement('beforebegin', errorDiv);
  }
  if (!flavors.classList.contains('invalid') && !choice.classList.contains('invalid')) {
    errorDiv.parentNode.removeChild(errorDiv);
  }


}, false);

[].forEach.call(flavorButton, function(el) {
  el.addEventListener('change', function(event) {
    event.preventDefault();
    
    console.log(el);
    flavors.classList.remove('invalid');
  }, false);
});

choice.addEventListener('input', function(event) {
  event.preventDefault();

  if (!validator.isEmpty(this.value) && isNaN(this.value)) {
    this.classList.remove('invalid');
  }
}, false);