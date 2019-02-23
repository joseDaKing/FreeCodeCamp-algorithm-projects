"use strict";

var palindrome = function palindrome(string) {
  var stringReplace = string.replace(/[-_.,]/gi, "");
  var stringSplit = stringReplace.split(/\s+/).join("");
  var stringToLowerCase = stringSplit.toLowerCase();
  var charArray = stringToLowerCase.split("");
  var reversedString = "";

  for (var i = charArray.length - 1; i >= 0; i--) {
    if (charArray[i] === "(") {
      charArray[i] = ")";
    } else if (charArray[i] === ")") {
      charArray[i] = "(";
    }

    reversedString += charArray[i];
  }

  return stringToLowerCase === reversedString;
};