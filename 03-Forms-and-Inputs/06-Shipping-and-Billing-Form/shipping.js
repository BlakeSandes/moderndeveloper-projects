var shippingForm = document.getElementById('shipping-form'),
shipping = document.querySelector('.shipping'),
billing = document.querySelector('.billing'),
notMatch = document.getElementById('not-match'),

country = document.getElementById('country'),
firstName = document.getElementById('firstname'),
lastName = document.getElementById('lastname'),
street  = document.getElementById('street'),
apt = document.getElementById('apt'),
zip = document.getElementById('zip'),
state = document.getElementById('state'),

countryNoMatch = document.getElementById('country-no-match'),
firstNameNoMatch = document.getElementById('firstname-no-match'),
lastNameNoMatch = document.getElementById('lastname-no-match'),
streetNoMatch  = document.getElementById('street-no-match'),
aptNoMatch = document.getElementById('apt-no-match'),
zipNoMatch = document.getElementById('zip-no-match'),
cityNoMatch = document.getElementById('city-no-match'),
stateNoMatch = document.getElementById('state-no-match'),

selectInvalidCheck = document.querySelectorAll('.select-styles'),
liInvalidCheck = document.getElementsByTagName('li'),
invalid,
errorDiv1 = document.querySelector('.error-div1'),
errorDiv2 = document.querySelector('.error-div2'),
errorDiv1Loc, 
errorDiv2Loc; 


notMatch.addEventListener('change', function(event) {
  event.preventDefault();

  billing.classList.toggle('toggle-display');
}, false);

// SUBMIT EVENT
shippingForm.addEventListener('submit', function(event) {
  event.preventDefault();

  invalid = document.getElementsByClassName('invalid');
  
  // Country validation
  if (country.selectedIndex !== 0) {
    country.parentNode.classList.remove('invalid');
  } else {
    country.parentNode.classList.add('invalid');
  }

  // First name validation
  if (!validator.isEmpty(firstName.value) ) {
    if (validator.isOfLength(firstName.value, 2) || isNaN(parseInt(firstName.value)) )  {
      firstName.parentNode.classList.remove('invalid');
    } else {
      firstName.parentNode.classList.add('invalid');
    } 
  } else {
    firstName.parentNode.classList.add('invalid');
  }

  // Last name validation
  if (!validator.isEmpty(lastName.value)) {
    if (validator.isOfLength(lastName.value, 2) || isNaN(parseInt(lastName.value))) {
      lastName.parentNode.classList.remove('invalid');
    } else {
      lastName.parentNode.classList.add('invalid');
    }
  }  else {
    lastName.parentNode.classList.add('invalid');
  }

  // Street validation
  if (!validator.isEmpty(street.value) ) {
    if ( (validator.isAlphanumeric(street.value)  || validator.isComposedOf(street.value, ['.']) || validator.isComposedOf(street.value, ['-'])) && !isNaN(parseInt(validator.firstWord(street.value))) ) {
      street.parentNode.classList.remove('invalid');
    } else {
      street.parentNode.classList.add('invalid');
    }
  } else {
    street.parentNode.classList.add('invalid');
  }

  // Apt/Suite validation
  if (validator.isEmpty(apt.value)) {
    apt.parentNode.classList.remove('invalid');
  } else if (!validator.isEmpty(apt.value)) {
    if (validator.isAlphanumeric(apt.value) ) {
      apt.parentNode.classList.remove('invalid');
    } else {
      apt.parentNode.classList.add('invalid');
    }
  } 

  // Zip validation
  if (!validator.isEmpty(zip.value)) {
    if (typeof parseInt(zip.value) === 'number' &&  zip.value.length === 5 && !isNaN(zip.value)) {
      zip.parentNode.classList.remove('invalid');
    } else {
      zip.parentNode.classList.add('invalid');
    }
  } else {
    zip.parentNode.classList.add('invalid');
  }

  // City validation
  if (!validator.isEmpty(city.value)) {
    if (isNaN(city.value) && validator.isTrimmed(city.value)) {
      city.parentNode.classList.remove('invalid');
    } else {
      city.parentNode.classList.add('invalid');
    }
  } else {
    city.parentNode.classList.add('invalid');
  }

  // State validation
  if (state.selectedIndex > 0) {
  state.parentNode.classList.remove('invalid');
  } else  {
    state.parentNode.classList.add('invalid');
  }
  
  // If any elements with .invalid class set the error div visible.
  if (invalid.length > 0) {
    errorDiv1.classList.add('visible');
    errorDiv1Loc = errorDiv1.getBoundingClientRect();
    window.scrollTo(0, errorDiv1Loc.top);
  }
  if (invalid.length === 0) {
    errorDiv1.classList.remove('visible');
  }

  // END OF .SHIPPING VALIDATION.

  // VALIDATION OF BILLING ON SUBMIT.
  
  if (notMatch.checked) {

      // CountryNoMatch validation
    if (countryNoMatch.selectedIndex !== 0) {
      countryNoMatch.parentNode.classList.remove('invalid');
    } else {
      countryNoMatch.parentNode.classList.add('invalid');
    }

    // First name validation
    if (!validator.isEmpty(firstNameNoMatch.value) ) {
      if (validator.isOfLength(firstNameNoMatch.value, 2) || isNaN(parseInt(firstNameNoMatch.value)) )  {
        firstNameNoMatch.parentNode.classList.remove('invalid');
      } else {
        firstNameNoMatch.parentNode.classList.add('invalid');
      } 
    } else {
      firstNameNoMatch.parentNode.classList.add('invalid');
    }

    // Last name validation
    if (!validator.isEmpty(lastNameNoMatch.value)) {
      if (validator.isOfLength(lastNameNoMatch.value, 2) || isNaN(parseInt(lastNameNoMatch.value))) {
        lastNameNoMatch.parentNode.classList.remove('invalid');
      } else {
        lastNameNoMatch.parentNode.classList.add('invalid');
      }
    }  else {
      lastNameNoMatch.parentNode.classList.add('invalid');
    }


    // Street validation
    if (!validator.isEmpty(streetNoMatch.value) ) {
      if ( (validator.isAlphanumeric(streetNoMatch.value)  || validator.isComposedOf(streetNoMatch.value, ['.']) || validator.isComposedOf(streetNoMatch.value, ['-'])) && !isNaN(parseInt(validator.firstWord(streetNoMatch.value))) ) {
        streetNoMatch.parentNode.classList.remove('invalid');
      } else {
        streetNoMatch.parentNode.classList.add('invalid');
      }
    } else {
      streetNoMatch.parentNode.classList.add('invalid');
    }

    // Apt/Suite validation
    if (validator.isEmpty(aptNoMatch.value)) {
      aptNoMatch.parentNode.classList.remove('invalid');
    } else if (!validator.isEmpty(aptNoMatch.value)) {
      if (validator.isAlphanumeric(aptNoMatch.value) ) {
        aptNoMatch.parentNode.classList.remove('invalid');
      } else {
        aptNoMatch.parentNode.classList.add('invalid');
      }
    } 

    // Zip validation
    if (!validator.isEmpty(zipNoMatch.value)) {
      if (typeof parseInt(zipNoMatch.value) === 'number' &&  zipNoMatch.value.length === 5 && !isNaN(zipNoMatch.value)) {
        zipNoMatch.parentNode.classList.remove('invalid');
      } else {
        zipNoMatch.parentNode.classList.add('invalid');
      }
    } else {
      zipNoMatch.parentNode.classList.add('invalid');
    }

    // City validation
    if (!validator.isEmpty(cityNoMatch.value)) {
      if (isNaN(cityNoMatch.value) && validator.isTrimmed(cityNoMatch.value)) {
        cityNoMatch.parentNode.classList.remove('invalid');
      } else {
        cityNoMatch.parentNode.classList.add('invalid');
      }
    } else {
      cityNoMatch.parentNode.classList.add('invalid');
    }

    // State validation
    if (stateNoMatch.selectedIndex > 0) {
    stateNoMatch.parentNode.classList.remove('invalid');
    } else  {
      stateNoMatch.parentNode.classList.add('invalid');
    }
    
    // If any elements with .invalid class set the error div visible.
     if (invalid.length > 0) {
    errorDiv2.classList.add('visible');
    errorDiv2Loc = errorDiv2.getBoundingClientRect();
    window.scrollTo(0, errorDiv2Loc.top);
  }
  if (invalid.length === 0) {
    errorDiv2.classList.remove('visible');
  }
  } 
  // End of .billing validation.

}, false);


