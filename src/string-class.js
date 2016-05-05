(function() {
  'use strict';

  /**
   * [hasVowels -- Checks if a string contain a vowel i.e (A E I O U)]
   * @return {Boolean} [Returns true if the a 
   * String contains a vowel and false otherwise.]
   */
  String.prototype.hasVowels = function() {
    return /[aeiou]/i.test(this);
  };

  /**
   * [toUpper -- Capitalize all the charater in a string]
   * @return {[String]} [Returns the uppercased string]
   */
  String.prototype.toUpper = function() {
    return this.replace(/[a-z]/g, function(matchedLetter) {
      // Get the upper case charater by subtracting 32 from the
      // unicode value of the main charater.
      return String.fromCharCode(matchedLetter.charCodeAt() - 32);
    });
  };

  /**
   * [toLower -- Make a string lowercase]
   * @return {[String]} [Returns string with all alphabetic
   * characters converted to lowercase.]
   */
  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, function(matchedLetter) {
      // Get the lower case charater by adding 32 to the
      // unicode value of the main charater.
      return String.fromCharCode(matchedLetter.charCodeAt() + 32);
    });
  };

  /**
   * [trimWord -- Strip whitespace from the beginning and end of a string]
   * @return {[String]} [returns a string with whitespace stripped 
   * from the beginning and end]
   */
  String.prototype.trimWord = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };

  /**
   * [ucFirst -- Make a string's first character uppercase]
   * @return {[String]} [Returns a string with the first character 
   * capitalized, if that character is alphabetic]
   */
  String.prototype.ucFirst = function() {
    return this.replace(/^[a-z]/, function(matchedLetter) {
      return matchedLetter.toUpper();
    });
  };

  /**
   * [isQuestion -- Check if a String ends with a question mark]
   * @return {Boolean} [Return true if a string ends with 
   * question mark or false otherwise]
   */
  String.prototype.isQuestion = function() {
    return /.[?]$/.test(this.trimWord());
  };

  /**
   * [removeSym -- Strip symbols from a string]
   * @return {[type]} [description]
   */
  String.prototype.removeSym = function() {
    return this.replace(/[,";:?!@#$%(^)&*()_+|.><{}±=-]/g, '');
  };

  /**
   * [trimWordEx -- Removes wihte spaces within and at the edges of a sentences]
   * @return {String} [A sentences separated with a single space]
   */
  String.prototype.trimWordEx = function() {
    return this.trimWord().replace(/\s+/g, ' ');
  };

  /**
   * [words -- Converts a string to an array of words]
   * @return {[Array]} [An array of the words in the string]
   */
  String.prototype.words = function() {
    if (this.length) {
      return this.removeSym().trimWordEx().split(/\s/);
    }

    return [];
  };

  /**
   * [wordCount -- Counts the number of the words in a string]
   * @return {[Integer]} [The number of words in a string]
   */
  String.prototype.wordCount = function() {
    return this.trimWordEx().words().length;
  };

  /**
   * [fromCurrency -- Converts a currency representation of a String to Number]
   * @return {[float]} [A number representation of the currency]
   */
  String.prototype.fromCurrency = function() {
    return parseFloat(this.replace(/[^\d.a-z]/ig, ''));
  };

  String.prototype.formatRealNumber = function() {
    // Save zero to realNumber if the first element in the 
    // array of numbers contain multiple zeros 
    return parseInt(this) === 0 ? '0' : this.groupNumber();
  };

  String.prototype.formatDecimal = function() {
    // Removes decimal number more than three digits.
    return this.length >= 3 ? this.substring(0, 2) : this;
  };

  String.prototype.groupNumber = function() {
    // Regex groups number in theres without counsuming them.
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  /**
   * [toCurrency -- Converts a number representation to money figures in String]
   * @return {[Mixed]} [A currency representation of the currency in String or 
   * NaN if not s number]
   */
  String.prototype.toCurrency = function() {
    // Checks if number contain an alphabet or a symbol.
    if (/[a-z\s?_:\+()&%#@!~\-\$*]/i.test(this) === false) {
      var splitedNum = this.split(/\./);
      return splitedNum.formatToCurrency();
    }

    return NaN;
  };

  Array.prototype.formatToCurrency = function() {
    if (this.length > 1) {
      var realNumber = this[0].formatRealNumber();
      var decimalPart = this[1].formatDecimal();

      return decimalPart ? (realNumber + '.' + decimalPart) : realNumber;
    }

    return this[0].groupNumber();
  };

})();
