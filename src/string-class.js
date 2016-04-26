(function() {
  'use strict';

  /**
   * [hasVowels description]

   * @return {Boolean} [description]
   */
  String.prototype.hasVowels = function() {
    return /[aeiou]/i.test(this);
  };

  /**
   * [toUpper description]
   * @return {[type]} [description]
   */
  String.prototype.toUpper = function() {
    return this.replace(/[a-z]/g, function(matchedLetter) {
      return String.fromCharCode(matchedLetter.charCodeAt() - 32);
    });
  };

  /**
   * [toLower description]
   * @return {[type]} [description]
   */
  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, function(matchedLetter) {
      return String.fromCharCode(matchedLetter.charCodeAt() + 32);
    });
  };

  /**
   * [trimWord description]
   * @return {[type]} [description]
   */
  String.prototype.trimWord = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };

  /**
   * [ucFirst description]
   * @return {[type]} [description]
   */
  String.prototype.ucFirst = function() {
    return this.toLower().trimWord().replace(/^[a-z]/, function(matchedLetter) {
      return String.fromCharCode(matchedLetter.charCodeAt() - 32);
    });
  };

  /**
   * [isQuestion description]
   * @return {Boolean} [description]
   */
  String.prototype.isQuestion = function() {
    return /[?]$/.test(this.trimWord());
  };

  /**
   * [removeSym description]
   * @return {[type]} [description]
   */
  String.prototype.removeSym = function() {
    return this.replace(/[,";:?!@#$%(^)&*()_+|.><{}±=-]/g, '');
  };

  /**
   * [trimEx description]
   * @return {String} [description]
   */
  String.prototype.trimEx = function() {
    return this.trimWord().replace(/\s+|\s+/g, ' ');
  };

  /**
   * [words description]
   * @return {[type]} [description]
   */
  String.prototype.words = function() {
    if (!this.length) {
      return [];
    }

    return this.removeSym().trimEx().split(/\s/);
  };

  /**
   * [wordCount description]
   * @return {[type]} [description]
   */
  String.prototype.wordCount = function() {
    return this.trimEx().words().length;
  };

  /**
   * [toCurrency description]
   * @return {[type]} [description]
   */
  String.prototype.toCurrency = function() {
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /**
   * [fromCurrency description]
   * @return {[type]} [description]
   */
  String.prototype.fromCurrency = function() {
    return parseFloat(this.replace(/[,]/g, ''));
  };

})();
