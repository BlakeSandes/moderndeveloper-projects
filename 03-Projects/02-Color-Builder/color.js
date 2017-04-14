var colorBuilder = document.getElementById('color-builder');
sliders = document.querySelectorAll('input[type=range]'),
red = document.getElementById('red'),
green = document.getElementById('green'),
blue = document.getElementById('blue'),
alpha = document.getElementById('alpha'),
rangeValue = document.querySelectorAll('.range-value')
minus = document.querySelectorAll('.minus'),
plus = document.querySelectorAll('.plus'),
display = document.getElementById('display');

display.style.backgroundColor = "rgba(" + [red.value, green.value,blue.value,alpha.value].join(',')+")";

var newPlus,
newMinus,
step;

[].forEach.call(sliders, function(el) {
  el.addEventListener('input', function(ev) {
    ev.preventDefault();

    this.parentNode.lastElementChild.innerHTML = this.value;

    display.style.backgroundColor = "rgba(" + [sliders[0].value, sliders[1].value, sliders[2].value, sliders[3].value].join(',')+")";

  }, false);
});

[].forEach.call(minus, function(el) {
  el.addEventListener('click', function(ev) {
    ev.preventDefault();

    newMinus = this.nextElementSibling.value;
    step = this.nextElementSibling.step

    if (this.nextElementSibling.id === 'alpha') {
      this.nextElementSibling.value = parseFloat(newMinus,10) - parseFloat(step, 10);
      this.parentNode.lastElementChild.innerHTML = this.nextElementSibling.value;
    } else {
      this.nextElementSibling.value = parseInt(newMinus,10) - parseInt(step, 10);
      this.parentNode.lastElementChild.innerHTML = this.nextElementSibling.value;
    }

    display.style.backgroundColor = "rgba(" + [sliders[0].value, sliders[1].value, sliders[2].value, sliders[3].value].join(',')+")"
    
  }, false);

});

[].forEach.call(plus, function(el) {
  el.addEventListener('click', function(ev) {
    ev.preventDefault();

    newPlus = this.previousElementSibling.value;
    step = this.previousElementSibling.step

    if (this.previousElementSibling.id === 'alpha') {
      this.previousElementSibling.value = parseFloat(newPlus,10) + parseFloat(step, 10);
      this.parentNode.lastElementChild.innerHTML = this.previousElementSibling.value;  
    } else {
      this.previousElementSibling.value = parseInt(newPlus,10) + parseInt(step, 10);
      this.parentNode.lastElementChild.innerHTML = this.previousElementSibling.value;
    }

    display.style.backgroundColor = "rgba(" + [sliders[0].value, sliders[1].value, sliders[2].value, sliders[3].value].join(',')+")"

  }, false);
});