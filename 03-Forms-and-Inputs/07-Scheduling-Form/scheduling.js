var scheduleForm = document.getElementById('schedule-form'),
allDay = document.getElementById('all-day'),
fromDate = document.getElementById('from-date'),
fromTime = document.getElementById('from-time'),
toDate = document.getElementById('to-date'),
toTime = document.getElementById('to-time'),
timeZone = document.getElementById('timezone'),
message = document.getElementById('message'),
tel = document.getElementById('tel'),
email = document.getElementById('email');


scheduleForm.addEventListener('submit', function(ev) {
  ev.preventDefault();


  if (allDay.checked) {
    // Code here to assign the fromDate, fromTime, toDate, & toTime values the value based off of the fromDate and fromTime values. The remaining toDate and toTime values will autofill based off of the other two values.
  }

  if (!validator.isEmpty(fromDate.value)) {
    if (validator.isDate(fromDate.value)) {
      fromDate.previousElementSibling.classList.remove('invalid');
    } else {
      fromDate.previousElementSibling.classList.add('invalid');
    }
  } else {
    fromDate.previousElementSibling.classList.add('invalid');
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




 
