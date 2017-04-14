var loginForm = document.getElementById('login-form'),
firstP = document.querySelector('.firstP'),
userName = document.getElementById('username'),
password = document.getElementById('password'),
errorDiv = document.querySelector('.error-div');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validator.isEmpty(userName.value) || validator.isLength(userName.value, 2)) {
    username.classList.add('invalid');
  }

  if (validator.isEmpty(password.value)  || !validator.isOfLength(password.value, 6)) {
    password.classList.add('invalid');
  }

  if (userName.classList.contains('invalid') || password.classList.contains('invalid')) {
    errorDiv.classList.add('visible');
  }

  if (!userName.classList.contains('invalid') && !password.classList.contains('invalid')) {
    errorDiv.classList.remove('visible');
  }
}, false);

userName.addEventListener('input', function(event) {
  event.preventDefault();

  if (validator.isOfLength(this.value, 2)) {
    this.classList.remove('invalid');
  }
}, false);

password.addEventListener('input', function(event) {
  event.preventDefault();

  if ( validator.isOfLength(password.value, 6) ) {
    this.classList.remove('invalid');
  }
}, false);