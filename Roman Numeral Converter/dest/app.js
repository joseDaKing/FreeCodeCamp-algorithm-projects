"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Digits: 
(I: 1), (V: 5), (X: 10), (L: 50), (C: 100), (D: 500), (M: 1000)

Expectional numbers: 
[IV: 4], [IX: 9], [XL: 40], [XC: 90], [CD: 400], [CM: 900]
*/
var convertToRoman = function convertToRoman(number) {
  var romansDigits = Object.entries({
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }).reduce(function (acc, currentItem, index, array) {
    if (index === 1) acc = [acc];
    var previousItem1 = array[index - 1];

    var _previousItem = _slicedToArray(previousItem1, 2),
        previousDigit1 = _previousItem[0],
        previousValue1 = _previousItem[1];

    var _currentItem = _slicedToArray(currentItem, 2),
        currentDigit = _currentItem[0],
        currentValue = _currentItem[1];

    if (!(previousValue1 - currentValue === currentValue)) {
      var _array = _slicedToArray(array[index - 2], 2),
          previousDigit2 = _array[0],
          previousValue2 = _array[1];

      acc.push([currentDigit + previousDigit2, previousValue2 - currentValue]);
      acc.push([currentDigit + previousDigit1, previousValue1 - currentValue]);
    }

    acc.push(currentItem);
    return acc;
  }).sort(function (a, b) {
    return b[1] - a[1];
  }).reduce(function (acc, item, index) {
    if (index === 1) {
      var temp = acc;
      acc = {};
      acc[temp[0]] = temp[1];
    }

    acc[item[0]] = item[1];
    return acc;
  });
  var romanNumerals = "";

  for (var key in romansDigits) {
    var value = romansDigits[key];

    while (true) {
      if (number < value) break;
      romanNumerals += key;
      number -= value;
    }
  }

  return romanNumerals;
};