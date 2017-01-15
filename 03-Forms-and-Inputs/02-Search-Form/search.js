var recipeForm = document.getElementById('recipe-form'),

search = document.getElementById('search'),
radioButtons = document.querySelectorAll('input[type=radio]'),
meal = document.querySelector('.meals'),
region = document.querySelector('.regions'),
init = document.querySelectorAll('.init'),
country = document.querySelectorAll('li[data-value]'),
active;

// Create error HTML fragment.
var errorDiv = document.createElement('div'),
emphasis = document.createElement('em'),
errorEmphasis = document.createTextNode("Error"),
errorSentence = document.createTextNode(":  empty or insufficient input.");

emphasis.appendChild(errorEmphasis);
errorDiv.appendChild(emphasis);
errorDiv.appendChild(errorSentence);

// Loop through radio buttons array and inject into the top label the id of the button clicked.
for (var item of radioButtons) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    
    [].forEach.call(radioButtons, function(el) {
      el.previousElementSibling.classList.remove('active');
    });

    if (event.target.checked) {
      meal.innerHTML = this.previousElementSibling.innerHTML;
      meal.classList.add('active');
      this.previousElementSibling.classList.add('active');
    }
  }, false);
}

// Grab the data-value from the country li, add a .active class and inject the selection into the h1.region.
[].forEach.call(country, function(el) {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    
    [].forEach.call(country, function(el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });

    region.innerHTML = this.innerHTML;

    region.classList.add('active');
    this.classList.add('active');

  }, false);
});

  


recipeForm.addEventListener('submit', function(event) { 
  event.preventDefault();

  if (validator.isEmpty(search.value) || !meal.classList.contains('active') || !region.classList.contains('active')) {
    errorDiv.classList.add('error-banner');
    recipeForm.insertAdjacentElement('beforebegin', errorDiv);
  } 
  if (!validator.isEmpty(search.value) && meal.classList.contains('active') && region.classList.contains('active')) {
    errorDiv.parentNode.removeChild(errorDiv);
  }
}, false);