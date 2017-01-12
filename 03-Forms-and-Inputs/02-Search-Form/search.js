var recipeForm = document.getElementById('recipe-form'),
radioButtons = document.querySelectorAll('input[type=radio]'),
meal = document.querySelector('.meals');
// document.querySelectorAll('input[type=radio]:checked');
  
for (var i = 0; i < radioButtons.length; i++) {
  
  radioButtons[i].addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.checked) {
      meal.innerHTML = this.id;
    }
  }, false);
}
  


recipeForm.addEventListener('submit', function(event) { 
  event.preventDefault();
}, false);