var ccForm = document.getElementById('cc-form'),
firstName = document.getElementById('firstname'),
middleInitial = document.getElementById('middlename'),
lastName = document.getElementById('lastname'),
cardNumber = document.getElementById('cardnumber'),
csv = document.getElementById('csv'),
month = document.getElementById('month'),
year = document.getElementById('year'),

labels = document.getElementsByTagName('label')
invalids = document.getElementsByClassName('invalid'),
notInvalids = document.querySelector('label:not([class])'),
errorDiv = document.querySelector('.error-div');

ccForm.addEventListener('submit', function(ev) {
  ev.preventDefault();

  // First name validation
  if (!validator.isEmpty(firstName.value)) {
    if (validator.isOfLength(firstName.value, 2) && isNaN(firstName.value)) {
      firstName.previousElementSibling.classList.remove('invalid');
    } else {
      firstName.previousElementSibling.classList.add('invalid');
    }
  } else {
    firstName.previousElementSibling.classList.add('invalid');
  }

  // Middle initial validation
  if (!validator.isEmpty(middleInitial.value)) {
    if (validator.isLength(middleInitial.value, 1)) {
      middleInitial.previousElementSibling.classList.remove('invalid');
    } else {
      middleInitital.previousElementSibling.classList.add('invalid');
    }
  } else {
    middleInitial.previousElementSibling.classList.add('invalid');
  }

  // Last name validation 
  if (!validator.isEmpty(lastName.value)) {
    if (validator.isOfLength(firstName.value, 2) && isNaN(firstName.value)) {
      lastName.previousElementSibling.classList.remove('invalid');
    } else {
      lastName.previousElementSibling.classList.add('invalid');
    }
  } else {
    lastName.previousElementSibling.classList.add('invalid');
  }

  // Credit card validation
  if (!validator.isEmpty(cardNumber.value)) {
    if (validator.isCreditCard(cardNumber.value)) {
      cardNumber.previousElementSibling.classList.remove('invalid');
    } else {
      cardNumber.previousElementSibling.classList.add('invalid');
    }
  } else {
      cardNumber.previousElementSibling.classList.add('invalid');
  }
  
  // CSV validation
  if (!validator.isEmpty(csv.value)) {
    if (csv.value.length === 3 && !isNaN(csv.value)) {
      csv.previousElementSibling.classList.remove('invalid');
    } else {
      csv.previousElementSibling.classList.add('invalid');
    }
  } else {
      csv.previousElementSibling.classList.add('invalid');
  }

  // Month validation
  if (!validator.isEmpty(month.value)) {
    month.previousElementSibling.classList.remove('invalid');
  } else {
    month.previousElementSibling.classList.add('invalid');
  }
  
  // Year validation
  if (!validator.isEmpty(year.value)) {
    year.previousElementSibling.classList.remove('invalid');
  } else {
    year.previousElementSibling.classList.add('invalid');
  }

  // Adding error div if invalid.
  if (invalids.length > 0) {
    errorDiv.classList.add('visible');
    ccForm.classList.add('cc-form-top');
  }

  // Removing error div if valid.
  if (invalids.length === 0) {
    errorDiv.classList.remove('visible');
    ccForm.classList.remove('cc-form-top');
  }
  
}, false);

// First name change on input.
firstName.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (validator.isOfLength(firstName.value, 2) && isNaN(firstName.value))  {
    firstName.previousElementSibling.classList.remove('invalid'); 
  }
}, false);

// Middle initial change on input.
middleInitial.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (validator.isLength(middleInitial.value, 1)) {
    middleInitial.previousElementSibling.classList.remove('invalid');
  } 
}, false);

// Last name change on input.
lastName.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (validator.isOfLength(firstName.value, 2) && isNaN(firstName.value)) {
    lastName.previousElementSibling.classList.remove('invalid');
  } 
}, false);

// Card number change on input.
cardNumber.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (validator.isCreditCard(cardNumber.value)) {
    cardNumber.previousElementSibling.classList.remove('invalid'); 
  }
}, false);

// CSV change on input.
csv.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (csv.value.length === 3 && !isNaN(csv.value)) {
    csv.previousElementSibling.classList.remove('invalid');
  } 
}, false);

// Month change on input.
month.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (!validator.isEmpty(month.value)) {
  month.previousElementSibling.classList.remove('invalid');
}
}, false);

// Year change on input.
year.addEventListener('input', function(ev) {
  ev.preventDefault();

  if (!validator.isEmpty(year.value)) {
    year.previousElementSibling.classList.remove('invalid');
  }
}, false);