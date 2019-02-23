"use strict";

var telephoneValidator = function telephoneValidator(string) {
  return /^(1?\s?)(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g.test(string);
};