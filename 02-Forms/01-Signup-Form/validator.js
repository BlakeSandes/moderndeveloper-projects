(function(window) {
  var validator = {
    isEmailAddress : function(input) {
      // Grab index of @ symbol
      var at = input.indexOf('@');
      // Grab text before ampersand
      var first = input.substr(0,at);
      // Grab text after ampersand
      var last = input.substr(at + 1);
      var result;
      
      // if (!input) {
      //   throw "Please fill in email input please.";
      //   result = false;
      // }
      
      if ( (typeof first === 'string' && first.length >= 1) && at !== -1 && (typeof last === 'string' && last.length >= 1) ) {
        result = true;
      } else  {
        result = false;
      }

      return result;
    },
    isPhoneNumber : function(input) {var toNumber;
      var phoneString;
      // If input number is written as string, remove common parentheses and dashes and convert to number and use toString method to get number length.
      if (typeof input === 'string') {
        toNumber = input.replace(/[()-]/gi, "");
        toNumber = parseInt(toNumber);
        phoneString = toNumber.toString();
      } else if (typeof input === 'number') {
        // Use toString method to get number length.
        phoneString = input.toString();
      }

      if (!input) {
        throw "Please input your phone number please.";
      }
      // Return true if ten digits.
      if (phoneString.length === 10) {
        return true;
      } else {
        return false;
      }
    },
    withoutSymbols : function(input) {
      var symbollLess = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`'"~()]/gi," ");
      return symbollLess;
    },
    isDate : function(input) {
      // Returns true if new Date doesn't throw an "Invalid Date" error and if the date Object is a number.
      return ( (new Date(input) !== "Invalid Date" && !isNaN(new Date(input)) ));
    },
    isBeforeDate : function(input, reference) {
      var date1 = new Date(input);
      var date2 = new Date(reference);

      // Confirm that both dates are valid dates.
      if ( (this.isDate(input) === false) || (this.isDate(reference) === false) ) {
        throw "Invalid Date";
      }
      // Get each date in number form from year 1970 and compare dates.
      if ( date1.getTime() > date2.getTime() ) {
        return true;
      } else {
        return false;
      }

    },
    isAfterDate : function(input, reference) {
      var date1 = new Date(input);
      var date2 = new Date(reference);


      if ( (this.isDate(input) === false) || (this.isDate(reference) === false) ) {
        throw "Invalid Date";
      }
      // Get each date in number form from year 1970 and compare dates. 
      if ( date1.getTime() < date2.getTime() ) {
        return true;
      } else {
        return false;
      }
    },
    isBeforeToday : function(input) {
      var today = new Date();
      var testDate = new Date(input);
      
      if ( this.isDate(input) === false ) {
        throw "Invalid Date";
      }
      // Get each date in number form from year 1970 and compare dates.
      if (testDate.getTime() < today.getTime()) {
        return true;
      } else {
        return false;
      }

    },
    isAfterToday : function(input) {
      var today = new Date();
      var testDate = new Date(input);

      if ( this.isDate(input) === false ) {
        throw "Invalid Date";
      }
      // Get each date in number form from year 1970 and compare dates.
      if (testDate.getTime() > today.getTime()) {
        return true;
      } else {
        return false;
      }

    },
    isEmpty : function(input) {
      // Check if undefined or null.
      if(input === undefined || input === null) {
        return false;
      }
      // Return true if zero length or only white space. 
      if (input.length === 0 || !input.trim()) {
        return true;
      } else  {
        return false;
      }
    },
    contains : function(input, words) {
      // Remove symbols.
      var noSymbol = this.withoutSymbols(input);
      // Convert string to an array to check each word.
      var inputArr = noSymbol.split(' ');
      var match = [];
      // Compare the words array within the input array for matches and push matches in match array.
      for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
          if (words[i] === inputArr[j]) {
            match.push(words[i]);
          }
        }
      }
      // Return true if items in match array.
      if (match.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    lacks : function(input, words) {
      // Remove symbols.
      var noSymbol = this.withoutSymbols(input);
      // Convert string to an array to check each word.
      var inputArr = noSymbol.split(' ');
      var match = [];
      // Compare the words array within the input array for matches and push matches in match array.
      for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
          if(words[i] === inputArr[j]) {
            match.push(words[i])
          }
        }
      }
      // Return true if NO items in match array.
      if (match.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isComposedOf : function(input, strings) {
      strings = strings.sort(function(a,b) {
        return b.length - a.length;
      });
      strings = strings.join('');
      strings = this.withoutSymbols(strings.toLowerCase());
      input = this.withoutSymbols(input.toLowerCase());
      input = input.replace(/\s/g, '');

      for (var i = 0; i < strings.length; i++) {
        if (input.indexOf(strings[i]) !== -1) {
          while (input.indexOf(strings[i]) !== -1) {
            input = input.replace(strings[i], '');
          }
        }
      }

      if (input.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    isLength : function(input, n) {
      if (!input || !n) {
        throw "Please fill in field.";
      }

      var inputLength = input.length;

      if (inputLength <= n) {
        return true;
      } else {
        return false;
      } 
      
    },
    isOfLength : function(input, n) {
      if (!input || !n) {
        throw "Please fill in field.";
      }

      var inputLength = input.length;

      if (inputLength >= n) {
        return true;
      } else {
        return false;
      } 
    },
    countWords : function(input) {
      if (input === undefined || input === null) {
        throw "No input given!";
      }

      if (input.length === 0 || !input.trim()) {
        return 0;
      } else {
        input = this.withoutSymbols(input);
        input = input.trim();
        input = input.split(' ');

        return input.length;
      }
    },
    lessWordsThan : function(input, n) {
       if ( (input === undefined || input === null) || (n === undefined || n === null) ) {
        throw "No input given!";
      }

      var inputLength;

      if (input.length === 0 || !input.trim()) {
        inputLength = input.length;
      } else {
        input = this.withoutSymbols(input);
        input = input.trim();
        input = input.split(' ');

        inputLength = input.length;
       
      }

      if (inputLength <= n) {
        return true;
      } else {
        return false;
      }

    },
    moreWordsThan : function(input, n) {
      if ( (input === undefined || input === null) || (n === undefined || n === null) ) {
        throw "No input given!";
      }

      var inputLength;

      if (input.length === 0 || !input.trim()) {
        inputLength = input.length;
      } else {
        input = this.withoutSymbols(input);
        input = input.trim();
        input = input.split(' ');

        inputLength = input.length;
       
      }

      if (inputLength >= n) {
        return true;
      } else {
        return false;
      }
    },
    isBetween : function(input, floor, ceil) {
      if (input >= floor && input <= ceiling) {
        return true;
      } else {
        return false;
      }
    },
    isAlphanumeric : function(input) {
      var match = input.match(/[a-z]|[A-Z]|[0-9]/g);

      if (input.length === 0 || !input.trim()) {
        return true;
      }
      if (match.length === input.length) {
        return true;
      } else {
        return false;
      }
    },
    isCreditCard : function(input) {
      var match = input.match(/[A-Z]|[a-z]|[0-9]/g);

      if (match !== null && match.length === 16) {
        return true;
      } 
      if (match !== null && match.length === 16 && input.length === 19 && input.indexOf('-') === 4 && input.indexOf('-') === 9 && input.indexOf('-') === 14 ) {
        return true;
      } else {
        return false;
      }
    },
    isHex : function(input) {
      var match = input.match(/[0-9]|[A-F]|[a-f]/g);

      if (!input || input === null || input === undefined) {
        throw "Please input HEX value.";
      }

      if (input.charAt(0) === '#' && (match.length === 6 || match.length === 3)) {
        return true;
      } else {
        return false;
      }
    },
    isRGB : function(input) {
      var match = input.match(/[.\/#!$%\^&\*;:{}=\-_`'"~]/gi);
      var start = input.startsWith('rgb(');
      var end = input.endsWith(')');
      var firstComma = input.indexOf(',');
      var secondComma = input.lastIndexOf(',');
      var firstSet = input.substring(4,firstComma);
      var secondSet = input.substring(firstComma + 1, secondComma);
      var thirdSet = input.substring(secondComma + 1, input.length - 1);

      if (match) { 
        return false;
      }
      if (start && end && firstComma && secondComma  && (firstSet <= 255 && firstSet.length > 0) && (secondSet <= 255 && secondSet.length > 0) && (thirdSet <= 255 && thirdSet.length > 0) ) {
        return true;
      } else {
        return false;
      }
    },
    isHSL : function(input) {
      var start = input.startsWith('hsl(');
      var end = input.endsWith(')');
      var values = input.slice(4, -1);
      var valuesArr = values.split(',');
      var result = false;

      // convert string values to array and number values.
      for (var i = 0; i < valuesArr.length; i++) {
        valuesArr[i] = parseFloat(valuesArr[i]);
      }
      // check hsl() syntax.
      // check if first index is between 0-360.
      // check if index 1 & 2 are between 0-1.
      if ( start && end && (valuesArr[0] >= 0 && valuesArr[0] <= 360) && (valuesArr[1] >= 0 && valuesArr[1] <= 1) && (valuesArr[2] >= 0 && valuesArr[2] <= 1) ) { 
        result = true;
      }
      console.log(start + valuesArr + end);
      return result;
    },
    isColor : function(input) {
      if ( this.isHex(input) || this.isRGB(input) || this.isHSL(input) ) {
        return true;
      } else {
        return false;
      }
    },
    isTrimmed : function(input) {
      var inputArr = input.split(' ');
      var spaces = [];

      for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === '') {
          spaces.push(inputArr[i]);
        }
      }

      if (spaces.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  window.validator = validator;
})(window);