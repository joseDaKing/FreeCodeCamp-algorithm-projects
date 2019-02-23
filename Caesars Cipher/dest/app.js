"use strict";

var rot13Letter = function rot13Letter(letter) {
  var isUpperCase = letter === letter.toUpperCase();
  letter = letter.toLowerCase();
  var letterCode = letter.charCodeAt() + 13;
  var _ref = ["a".charCodeAt(), "z".charCodeAt()],
      min = _ref[0],
      max = _ref[1];
  ;

  if (max < letterCode) {
    letterCode -= max;
    letterCode += min - 1;
  }

  letter = String.fromCharCode(letterCode);
  letter = isUpperCase ? letter.toUpperCase() : letter;
  return letter;
};

var rot13 = function rot13(string) {
  return string.replace(/[A-Z]/gi, function (letter) {
    return rot13Letter(letter);
  });
};