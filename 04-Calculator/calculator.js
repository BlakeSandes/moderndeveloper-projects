// This Project Assignment will add functionality to the calculator you created in the HTML & CSS chapter projects.

// It will function by building a string based on the buttons pressed. Each button press should append the button’s value to the “screen” text input, with the exception of the CLEAR, =, and DELbuttons. Their functionality is specified below:

// The CLEAR button should clear the text input of all characters.

// The DEL button should remove the last character at the end of the text input.

// The = button should do the following:

// Place the contents of the “screen” text input into a variable.

// Run the built-in function eval on the variable. More on eval below.

// Set the “screen” text input to be the result of the eval call.

var buttonList = document.getElementsByTagName('button'),
screen = document.querySelector('.screen'),
buttonValue,
screenContents,
result;

var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};


forEach(buttonList, function(index, elem) {
  elem.addEventListener('click', function(ev) {
    ev.preventDefault();

    buttonValue = document.createTextNode(this.value);

    if (this.innerHTML === 'DEL') {
      screen.innerHTML = screen.innerHTML.replace(screen.innerHTML.charAt(screen.innerHTML.length - 1), '');    
    } else if (this.innerHTML === 'AC') {
      screen.innerHTML = '';
    } else if (this.innerHTML === '=') {
      if (screen.innerHTML.length > 0) {
        screenContents = screen.innerHTML;
        screen.innerHTML = eval(screenContents);
      }
    } else {
      screen.appendChild(buttonValue);
    }

  }, false);
});