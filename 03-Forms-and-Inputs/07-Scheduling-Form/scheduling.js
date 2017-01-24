var scheduleForm = document.getElementById('schedule-form'),
allDay = document.getElementById('all-day'),
fromDate = document.getElementById('from-date'),
fromTime = document.getElementById('from-time'),
toDate = document.getElementById('to-date'),
toTime = document.getElementById('to-time'),
timeZone = document.getElementById('timezone'),
message = document.getElementById('message'),
tel = document.getElementById('tel'),
email = document.getElementById('email'),

startDate,
startTime,
endDate,
endTime,
utcDate,

errorDiv = document.querySelector('.error-div'),
errorDivLoc,
invalids = document.getElementsByClassName('invalid'),
errorTestArr;



scheduleForm.addEventListener('submit', function(ev) {
  ev.preventDefault();

  errorTestArr = [];
  // Code here to assign the fromDate, fromTime, toDate, & toTime values the value based off of the fromDate and fromTime values. The remaining toDate and toTime values will autofilled based off of the other two values. To be done at a future time.

  // if (allDay.checked) {

  // }

  // From appointment date validation
  if (!validator.isEmpty(fromDate.value)) {
    if (validator.isDate(fromDate.value)) {
      startDate = new Date(fromDate.value);
      fromDate.previousElementSibling.classList.remove('invalid');
    } else {
      fromDate.previousElementSibling.classList.add('invalid');
    }
  } else {
    fromDate.previousElementSibling.classList.add('invalid');
  }


  // From appointment time validation
  if (!validator.isEmpty(fromTime.value)) {
    startTime = fromTime.value.split(':');
    startDate.setHours(startTime[0], startTime[1]);
    fromTime.previousElementSibling.classList.remove('invalid');
  } else {
    fromTime.previousElementSibling.classList.add('invalid');
  }


  // To appointment date validation
  if (!validator.isEmpty(toDate.value)) {
    if (validator.isDate(toDate.value) && validator.isBeforeDate(toDate.value, fromDate.value)) {
      endDate = new Date(toDate.value);
      toDate.previousElementSibling.classList.remove('invalid');
    } else {
      toDate.previousElementSibling.classList.add('invalid');
    }
  } else {
    toDate.previousElementSibling.classList.add('invalid');
  }  

  // To appointment time validation
  if (!validator.isEmpty(toTime.value)) {
    endTime = toTime.value.split(':');
    endDate.setHours(endTime[0], endTime[1]);
    toTime.previousElementSibling.classList.remove('invalid');
  } else {
    toTime.previousElementSibling.classList.add('invalid');
  }

  // Code for assigning the new Date value based off of the timezone selected. If the timezone is selected than the date object will be adjusted accordingly, otherwise the timezone will be what is on the local UTC. Not within the scope of this project, but I will come back to it.
  // if (!validator.isEmpty(timezone.value)) {

  // }
  // utcDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getDay(), startDate.getDate(), startDate.getHours(), startDate.getMinutes() ));

  // Message validation
  if (!validator.isEmpty(message.value)) {
    message.previousElementSibling.classList.remove('invalid');
  } else {
    message.previousElementSibling.classList.add('invalid');
  }

  // Telephone validation
  if (!validator.isEmpty(tel.vlaue)) {
    if (validator.isPhoneNumber(tel.value)) {
      tel.previousElementSibling.classList.remove('invalid');
    } else {
      tel.previousElementSibling.classList.add('invalid');
    }
  } else {
    tel.previousElementSibling.classList.add('invalid');
  }

  // Email validation
  if (!validator.isEmpty(email.value)) {
    if (validator.isEmailAddress(email.value)) {
      email.previousElementSibling.classList.remove('invalid');
    } else {
      email.previousElementSibling.classList.add('invalid');
    }
  } else {
    email.previousElementSibling.classList.add('invalid');
  }

  // Adding and removing errorDiv
  [].forEach.call(invalids, function(el) {
    if (el.classList.contains('invalid') ) {
      errorTestArr.push(true);
    }
    if (!el.classList.contains('invalid')) {
      errorTestArr.pop();
    }
  });

  if (errorTestArr.length > 0) {
    errorDiv.classList.add('visible');
    errorDivLoc = errorDiv.getBoundingClientRect();
    window.scrollTo(0, errorDivLoc.top);
  }
  if (errorTestArr.length === 0) {
    errorDiv.classList.remove('visible');
  }

  console.log('Submit event fired.');

}, false);



// Code for expanding message textarea.

// var messageContainer = document.querySelector('.message'),
// message = document.getElementById('message'),
// hiddenDiv = document.createElement('div'),
// content = null;

// // message.classList.add('txt-stuff');
// hiddenDiv.classList.add('hidden-div');
// hiddenDiv.classList.add('message-style');
// messageContainer.appendChild(hiddenDiv);

// message.addEventListener('keyup', function(ev) {
//   ev.preventDefault();

//   content = this.value;
//   content = content.replace(/\n/g, '<br>');
//   hiddenDiv.innerHTML = content + '<br class="lbr">';

//   this.clientHeight = hiddenDiv.style.height;
//   console.log(hiddenDiv.style.height);
// }, false);




 
