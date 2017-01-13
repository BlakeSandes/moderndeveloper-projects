var recipeForm = document.getElementById('recipe-form'),
radioButtons = document.querySelectorAll('input[type=radio]'),
meal = document.querySelector('.meals'),
foodRegions = document.querySelectorAll('select[name=region]');
// Loop through radio buttons array and inject into the top label the id of the button clicked.
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.checked) {
      meal.innerHTML = this.id;
    }
  }, false);
}

// Grab the option value from the region select and inject the selection into the top label.



  


recipeForm.addEventListener('submit', function(event) { 
  event.preventDefault();
}, false);