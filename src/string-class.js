'use strict';

String.prototype.hasVowels = function() {
  // body...
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  // body...
  return this.replace(/[a-z]/g, function(matchedLetter) {
    return String.fromCharCode(matchedLetter.charCodeAt() - 32);
  });
};

String.prototype.toLower = function() {
  // body...
  return this.replace(/[A-Z]/g, function(matchedLetter) {
    return String.fromCharCode(matchedLetter.charCodeAt() + 32);
  });
};

String.prototype.trimWord = function() {
  // body...
  return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.ucFirst = function() {
  // body...
  var _this = this.toLower().trimWord();
  return _this.replace(/^[a-z]/, function(matchedLetter) {
    return String.fromCharCode(matchedLetter.charCodeAt() - 32);
  });
};

String.prototype.isQuestion = function() {
  // body...

};
