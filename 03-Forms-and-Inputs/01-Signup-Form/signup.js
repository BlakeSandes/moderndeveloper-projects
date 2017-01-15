var signupForm = document.getElementById('signup'),
firstName = document.getElementById('first_name'),
lastName = document.getElementById('last_name'),
userName = document.getElementById('user_name'),
email = document.getElementById('user_email'),
datefield = document.getElementById('datefield'),
month = document.getElementById('month'),
day = document.getElementById('day'),
year = document.getElementById('year'),
password = document.getElementById('user_password'),
confirmPassword = document.getElementById('confirm_password'),
dateOfBirth;

// Declaring HMTL fragment variables for top error modal.
var errorDiv = document.createElement('div'),
errorMessage = document.createTextNode("Error: empty or insufficient input.");

// change .invalid class to inputs if incorrect input.
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var invalids = document.getElementsByClassName('invalid');
                                            
  if (validator.isEmpty(firstName.value) || firstName.value.length < 2) {
    firstName.classList.add('invalid');
    firstName.previousElementSibling.classList.add('error-icon');
  }

  if (validator.isEmpty(lastName.value) || lastName.value.length < 2) {
    lastName.classList.add('invalid');
    lastName.previousElementSibling.classList.add('error-icon');
  }

  if (validator.isEmpty(userName.value) || userName.value.length < 2) {
    userName.classList.add('invalid');
    userName.previousElementSibling.classList.add('error-icon');
  }

  if (!validator.isEmailAddress(email.value)) {
    email.classList.add('invalid');
    email.previousElementSibling.classList.add('error-icon');
  }

  if ( !validator.isEmpty(year.value) && !validator.isEmpty(month.value) && !validator.isEmpty(day.value) ) {
    dateOfBirth = new Date(year.value, month.value - 1, day.value);
  } 
  if ( validator.isEmpty(year.value) || year.value.length !== 4 || isNaN(year.value)) {
    year.classList.add('invalid');
    year.previousElementSibling.classList.add('error-icon');
  } 
  if ( validator.isEmpty(month.value) || month.value.length !== 2 || isNaN(month.value)) {
    month.classList.add('invalid');
    month.previousElementSibling.classList.add('error-icon');
  } 
  if ( validator.isEmpty(day.value) || day.value.length !== 2 || isNaN(day.value) ) {
    day.classList.add('invalid');
    day.previousElementSibling.classList.add('error-icon');
  }
  
  if (validator.isEmpty(password.value) || password.value.length < 6) {
    password.classList.add('invalid');
    password.previousElementSibling.classList.add('error-icon');
  }

  if (validator.isEmpty(confirmPassword.value) || confirmPassword.value.length < 6 || password.value !== confirmPassword.value ) {
    confirmPassword.classList.add('invalid');
    confirmPassword.previousElementSibling.classList.add('error-icon');
  }

  if (document.getElementsByClassName('invalid')) {
    errorDiv.appendChild(errorMessage);
    errorDiv.classList.add('error-banner');
    signupForm.insertAdjacentElement('beforebegin', errorDiv);
    window.scrollTo(0,0);
  } 
  if (invalids.length === 0){
    errorDiv.parentNode.removeChild(errorDiv);
  }

}, false);


// Remove .invalid class if correct input.

firstName.addEventListener('input', function(event) {
  event.preventDefault();

  if (!validator.isEmpty(this.value) && this.value.length > 2) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

lastName.addEventListener('input', function(event) {
  event.preventDefault();

  if (!validator.isEmpty(this.value) && this.value.length > 2) {
   this.classList.remove('invalid');
   this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

userName.addEventListener('input', function(event) {
  event.preventDefault();

  if (!validator.isEmpty(this.value) && this.value.length > 2) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

email.addEventListener('input', function (event) {
  event.preventDefault();

  if (validator.isEmailAddress(this.value)) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

month.addEventListener('input', function(event) {
  event.preventDefault();

  if (this.value.length === 2 && !isNaN(this.value)) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

day.addEventListener('input', function(event) {
  event.preventDefault();

  if (this.value.length === 2 && !isNaN(this.value)) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

year.addEventListener('input', function(event) {
  event.preventDefault();

  if ( year.value.length === 4 && !isNaN(year.value)) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');
  }
}, false);

password.addEventListener('input', function(event) {
  event.preventDefault();

  if (this.value.length > 6) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');  
  }
}, false);

confirmPassword.addEventListener('input', function(event) {
  event.preventDefault();

  if (this.value === password.value) {
    this.classList.remove('invalid');
    this.previousElementSibling.classList.remove('error-icon');
    this.previousElementSibling.classList.add('valid');  
  }
}, false);
