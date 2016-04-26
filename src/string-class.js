(function() {
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
    return this.toLower().trimWord().replace(/^[a-z]/, function(matchedLetter) {
      return String.fromCharCode(matchedLetter.charCodeAt() - 32);
    });
  };

  String.prototype.isQuestion = function() {
    // body...
    return /[?]$/.test(this.trimWord());
  };

  String.prototype.removeSym = function() {
    // body...
    return this.replace(/[,";:?!@#$%(^)&*()_+|.><{}±=-]/g, '');
  };

  String.prototype.trimEx = function(first_argument) {
    // body...
    return this.trimWord().replace(/\s+|\s+/g, ' ');
  };

  String.prototype.words = function() {
    // body...
    if (!this.length) {
      return [];
    }

    return this.removeSym().trimEx().split(/\s/);
  };

  String.prototype.wordCount = function() {
    // body...
    return this.trimEx().words().length;

  };

})();
