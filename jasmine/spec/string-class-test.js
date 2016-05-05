(function() {
  'use strict';

  describe('String Class', function() {
    // Tests for hasVowels()
    describe('HAS VOWELS - hasVowels()', function() {
      // Return type test
      describe('Should return a value of type Boolean', function() {
        it('"check.hasVowels()" should return "boolean"', function() {
          expect(typeof('check'.hasVowels())).toBe('boolean');
        });
      });

      // Functionality tests
      describe('Should ', function() {
        // True value tests
        describe('Should return true for a String with vowel(s).', function() {
          it('Should return true for "Camel"', function() {
            expect('Camel'.hasVowels()).toBe(true);
          });
          it('Should return true for "Queueing"', function() {
            expect('Queueing'.hasVowels()).toBe(true);
          });
        });

        // False value tests
        describe('Should return false for a String without vowel', function() {
          it('Should return false for "Sky"', function() {
            expect('Sky'.hasVowels()).toBe(false);
          });
          it('Should return false for "122345"', function() {
            expect('122345'.hasVowels()).toBe(false);
          });
          it('Should return false for "Twyndyllyngs *!#"', function() {
            expect('Twyndyllyngs *!#'.hasVowels()).toBe(false);
          });
        });
      });
    });

    // Tests for toUpper()
    describe('TO UPPER - toUpper()', function() {
      // Return type tests
      describe('Should return a String', function() {
        it('typeof("prototype".toUpper()) should return "string"', function() {
          expect(typeof('prototype'.toUpper())).toBe('string');
        });
      });

      // Functionality tests
      describe('Should convert alphabets in a string to uppercase', function() {
        // Mixed case conversion tests
        describe('Should convert mixed string cases to uppercase', function() {
          it('Should return "THE PLAINTIFF" for "tHe PLAINtiff?"', function() {
            expect('tHe PLAINtiff?'.toUpper()).toBe('THE PLAINTIFF?');
          });
          it('Should return "CHECK-POINT" for "Check-point"', function() {
            expect('Check-point'.toUpper()).toBe('CHECK-POINT');
          });
          it('Should return "BAROMETER" for "BAROmeter"', function() {
            expect('BAROmeter'.toUpper()).toBe('BAROMETER');
          });
        });

        // Non-alphabetical character conversion test
        describe('Should not alter non-alpahbetical characters', function() {
          it('Should return "122345" for "122345"', function() {
            expect('122345'.toUpper()).toBe('122345');
          });
          it('Should return "$!@#$%A&B^C*D&" for "$!@#$%a&b^c*d&"', function() {
            expect('$!@#$%a&b^c*d&'.toUpper()).toBe('$!@#$%A&B^C*D&');
          });
        });
      });
    });

    // Tests for toLower()
    describe('TO LOWER - toLower()', function() {
      // Return type tests
      describe('Should return a value of type String', function() {
        it('typeof("prototype".toLower()) should return "string"', function() {
          expect(typeof('prototype'.toLower())).toBe('string');
        });
      });

      //Functionality tests
      describe('Should return a string of alphabet to lowercase.', function() {
        // Mixed case conversion tests
        describe('Should convert mixed case strings to lowercase', function() {
          it('Should return "glamorous!" for "glamOROUS!"', function() {
            expect('glamOROUS!'.toLower()).toBe('glamorous!');
          });
          it('Should return "belligerent" for "BeLlIgErEnT"', function() {
            expect('BeLlIgErEnT'.toLower()).toBe('belligerent');
          });
          it('Should return "WelcomE HomE" for "welcome home"', function() {
            expect('WelcomE Home'.toLower()).toBe('welcome home');
          });
        });

        // Upper case conversion tests
        describe('Should convert uppercase strings to lowercase', function() {
          it('Should return "lucrative*" for "LUCARTIVE*"', function() {
            expect('LUCRATIVE*'.toLower()).toBe('lucrative*');
          });
          it('Should return "i am ready." for "I AM READY."', function() {
            expect('I AM READY.'.toLower()).toBe('i am ready.');
          });
        });

        // Non-alphabetical character conversion tests
        describe('Should not alter non-alpahbetical characters', function() {
          it('Should return "122345" for "122345"', function() {
            expect('122345'.toLower()).toBe('122345');
          });
          it('Should return "$!@#$%a&b^c*d&" for "$!@#$%A&B^C*D&"', function() {
            expect('$!@#$%A&B^C*D&'.toLower()).toBe('$!@#$%a&b^c*d&');
          });
        });
      });
    });

    // Tests for ucFirst()
    describe('UC FIRST - ucFirst()', function() {
      // Return Type tests
      describe('Should return a string type', function() {
        it('typeof("prototype".ucFirst()) should return "string"', function() {
          expect(typeof('prototype'.ucFirst())).toBe('string');
        });
      });

      // Functionality tests
      describe('Should capitalize the first letter of a string', function() {
        // Mixed case conversion tests
        describe('Should capitalize only first letter of a string', function() {
          it('Should return "Andela!" for "andela!"', function() {
            expect('andela!'.ucFirst()).toBe('Andela!');
          });
          it('Should return "Amity_112*" for "amity_112*"', function() {
            expect('amity_112*'.ucFirst()).toBe('Amity_112*');
          });
          it('Should return "This is andela" for "this is andela"', function() {
            expect('this is andela'.ucFirst()).toBe('This is andela');
          });
          it('Should retrun "JavaScript" for "javaScript"', function() {
            expect('javaScript'.ucFirst()).toBe('JavaScript');
          });
          it('Should return " i went home" for " i went home"', function() {
            expect(' i went home'.ucFirst()).toBe(' i went home');
          });
        });
      });

      // Non-alphabetical character conversion tests
      describe('Should not alter non-alpahbetical characters ', function() {
        it('Should return "122345" for "122345"', function() {
          expect('122345'.ucFirst()).toBe('122345');
        });
        it('Should return "$!@#$%a&b^c*d&" for "$!@#$%a&b^c*d&"', function() {
          expect('$!@#$%a&b^c*d&'.ucFirst()).toBe('$!@#$%a&b^c*d&');
        });
      });
    });

    // Tests for isQuestion()
    describe('IS QUESTION - isQuestion()', function() {
      // Return type tests
      describe('Should return a value of type Boolean', function() {
        it('typeof("tester".isQuestion() Should return "boolean")', function() {
          expect(typeof('tester'.isQuestion())).toBe('boolean');
        });
      });

      // Functionality tests
      describe('Should test whether a string is a question.', function() {
        // True value tests
        describe('Should be true if "?" is the last alphabet', function() {
          it('Should return true for "Who won the league?   "', function() {
            expect('Who won the league?   '.isQuestion()).toBe(true);
          });
          it('Should return true for "How do you do?"', function() {
            expect('How do you do?'.isQuestion()).toBe(true);
          });
          it('Should return true for "Where am i     ?"', function() {
            expect('Where am i     ?'.isQuestion()).toBe(true);
          });
        });

        // False value tests
        describe('Should be false if ? is not the alphabet', function() {
          it('Should return false for "Hey there!"', function() {
            expect('Hey there!'.isQuestion()).toBe(false);
          });
          it('Should return false for "How are you? I am fine."', function() {
            expect('How are you? I am fine.'.isQuestion()).toBe(false);
          });
          it('Should return false for "?uhh kj sa?ad?sd ?_"', function() {
            expect('?12213?2132?1 323sdsdsa?ad?sds'.isQuestion()).toBe(false);
          });
          it('Should return false for "?"', function() {
            expect('?'.isQuestion()).toBe(false);
          });
        });
      });
    });

    // Tests for toWords()
    describe('WORDS - words()', function() {
      // Return Type Tests
      describe('Should return an Object', function() {
        it('typeof("this method".words()) should return "object"', function() {
          expect(typeof('this method'.words())).toBe('object');
        });
      });
      describe('Should return a value of instance Array', function() {
        it('Should return an array for "This method".words()', function() {
          expect('This method'.words() instanceof Array).toBe(true);
        });
      });

      // Functionality tests
      // Unpunctuated string tests
      describe('Should return an array of the words in a string', function() {
        it('Should return ["yellow","apple"] for "yellow apple "', function() {
          expect('yellow apple.'.words()).toEqual(['yellow', 'apple']);
        });
        it('Should return [] for ""', function() {
          expect(''.words()).toEqual([]);
        });
      });

      // Punctuated string tests
      describe('Should return an array of words', function() {
        it('Should not see symbols as words', function() {
          var testString = ' Really? Are you sure? That @#@%@$#(*&';
          var testResult = ['Really', 'Are', 'you', 'sure', 'That'];

          expect(testString.words()).toEqual(testResult);
        });
      });
    });

    // Tests for wordCount()
    describe('WORD COUNT - wordCount()', function() {
      // Return Type Tests
      describe('Should return a value of type number', function() {
        it('typeof("His home".wordCount()) should return "number"', function() {
          expect(typeof('His home'.wordCount())).toBe('number');
        });
      });

      // Functionality tests
      // Unpunctuated string tests
      describe('Should return the number of words in the string.', function() {
        it('Should return 3 for "   Bananas     are      yellow."', function() {
          expect('   Bananas     are      yellow.'.wordCount()).toEqual(3);
        });
        it('Should return 6 for "1 2 3 one two three"', function() {
          expect('1 2 3 one two three'.wordCount()).toEqual(6);
        });
        it('Should return 0 for ""', function() {
          expect(''.wordCount()).toEqual(0);
        });
      });

      // Punctuated string tests
      describe('Should return the number of words in a sentence', function() {
        it('Should return 4 for "Really? Are you sure? @#@,#&"', function() {
          expect('Really? Are you sure? @#@,#&'.wordCount()).toEqual(4);
        });
      });
    });

    // Tests for toCurrency()
    describe('TO CURRENCY - toCurrency()', function() {
      // Return type test
      describe('Should return a value of type string', function() {
        it('Should return string for 1234567.89 .toCurrency())', function() {
          expect(typeof('1234567.89'.toCurrency())).toBe('string');
        });
      });

      // Functionality tests
      describe('Should return a currency description of a number', function() {
        // Number strings conversion tests
        it('Should return "12,345,678" for "123455678"', function() {
          expect('12345678'.toCurrency()).toEqual('12,345,678');
        });
        it('Should return "1" for "1.0000000000000"', function() {
          expect('1.0000000000000'.toCurrency()).toEqual('1.00');
        });
        it('Should return "0" for "00000.000000"', function() {
          expect('00000.000000'.toCurrency()).toEqual('0.00');
        });
        it('Should return "1" for "1.000100"', function() {
          expect('1.000100'.toCurrency()).toEqual('1.00');
        });
        it('Should return "1,000.10" for "1000.10"', function() {
          expect('1000.10'.toCurrency()).toEqual('1,000.10');
        });
        it('Should return "12,345,678.91" for "123455678.910"', function() {
          expect('12345678.910'.toCurrency()).toEqual('12,345,678.91');
        });
      });

      // NaN string conversion tests
      describe('Should returns NaN for a non-number string.', function() {
        it('Should return NaN for "Make me into money"', function() {
          expect('Make me into money'.toCurrency()).toEqual(NaN);
        });
        it('Should return NaN for "12333+009090"', function() {
          expect('12333+009090'.toCurrency()).toEqual(NaN);
        });
      });
    });

    // Tests for fromCurrency()
    describe('FROM CURRENCY - fromCurrency()', function() {
      // Return type test
      describe('Should return a value of type number', function() {
        it('typeof(#1,234.89.toCurrency()) should return number', function() {
          expect(typeof('$1,234.89 '.fromCurrency())).toBe('number');
        });
      });

      // Functionality tests
      describe('Should return number representation of a Currency', function() {
        // Number strings conversion tests
        it('Should return 123455678 for "$12,345,678"', function() {
          expect('$12,345,678'.fromCurrency()).toEqual(12345678);
        });
        it('Should return 123455678.91 for "£12,345,678.91"', function() {
          expect('£12,345,678.90'.fromCurrency()).toEqual(12345678.9);
        });
        it('Should return 12345678.1 for "12,345,678.10"', function() {
          expect('12,345,678.10'.fromCurrency()).toEqual(12345678.1);
        });
        it('Should return 465734567 for "465734567__"', function() {
          expect('465734567__'.fromCurrency()).toEqual(465734567);
        });
      });

      // NaN string conversion tests
      describe('Should returns NaN for a non-number string.', function() {
        it('Should return NaN for "Make me into money"', function() {
          expect('Make me into money'.fromCurrency()).toEqual(NaN);
        });
        it('Should return NaN for "E767637673k8783787"', function() {
          expect('E767637673k8783787'.fromCurrency()).toEqual(NaN);
        });
      });

    });

  });

})();
