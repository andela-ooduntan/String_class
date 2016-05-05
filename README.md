## String Class
Extends the functionality of the string class by providng you with methods that you can use to manipulate strings to achieve maximum perfomance. Mosts of this methods have been implemented using regular epxressions.

## Code Example
To use _**`String-class`**_ in your page include it at the end of your html page
``` Html
        <!Doctype html>
        <html>
            <body>
                <!--alot html above-->
                <!--include StringJS script an the end of your page-->
                <script src="js/strings.js"></script>
            </body>
        </html>
```

1. ######  Method _`hasVowels()`._

    This method can be used to check if a string has vowels, It will return a boolean datatype true if vowels exists and false if they dont.
    ``` JavaScript
        var feeling = "This is the best day ever",
            random = "sphynx";
            
            feeling.hasVowels(); // return => true
            random.hasVowels(); // return => false
    ```
2. ######  Method _`toUpper()`_.

    This method can be used to uppercase words, its a custom implementation of JavaScript inbuilt `toUpperCase()`, This method will return an all uppercase string.
    ``` JavaScript
        var myVar = "We all love javasript";
            myVar.toUpper(); // return => WE ALL LOVE JAVASCRIPT
    ```
3. ######  Method _`toLower()`_.

    This method can be used to lowercase words, its a custom implementation of JavaScript inbuilt `toLowerCase()`, This method will return  an all uppercase string.
    ``` JavaScript
        var myVar = "WE ALL LOVE JAVASCRIPT";
            myVar.toLower(); // return => we all love javascript
    ```
4. ######  Method _`ucFirst()`_.

    This method can be used to to capitize a sentence, It returns a string with all the words capitalized.
    ``` JavaScript
        var sentence = "i want this sentence capiatalized";
            sentence.ucFirst(); // returns I Want This Sentence Capitalized
    ```
5. ######  Method _`isQuestion()`_.

    This method can be used to detect if a sentence is a question or not. It will return a boolean value of true or false.
    ``` JavaScript
        var myVar = "Are you serious?", mySecondVar = "yes i am";
            myVar.isQuestion(); // returns => true
            mySecondVar.isQuestion(); // returns => false
    ```
6. ######  Method _`words()`_.

    This method can be used to return the all the words in sentence in form of an array e.g `['me', 'and', 'myself']`
    ``` JavaScript
        var sentence = "me and myself";
            sentence.words(); // returns => ['me', 'and', 'myself']
    ```

7. ######  Method _`WordCount()`_.

    This method can be used to find the number of words words in a sentence, It utilizes the method `words` above to maximize perfomance.
    ``` JavaScript
        var sentence = "me and myself";
            sentence.wordCount(); // returns = 3
    ```

8. ######  Method _`toCurrency()`_.

    This method can be used to format a string to currency.
    ``` Javascript
        var money = "234456789.12"
            money.toCurrency(); // returns 234,456,789.12
    ```

9. ######  Method _`fromCurrency()`_.

    This method can be used to converts a currency format, back to nummber. It return type is a number.
    ``` JavaScript
        var currency = "12,345,678.12";
            currency.fromCurrency(); // returns  => 12345678.12
    ```

## Installation
1.  Download and install [**Node JS**](https://nodejs.org/en/) if not already installed.  
1.  Run `npm install -g http-server` on the terminal.
1.  Clone [**this repository**](https://github.com/andela-ooduntan/String_class.git) or go to the project github page [**here**](https://github.com/andela-ooduntan/String_class/) and download the zip file of the project. Unzip it.

## Tests
Run `http-server -c-1` on your terminal while within the **project root directory**.    
Navigate to `http://127.0.0.1:8080/jasmine/SpecRunner.html` on your browser to run **jasmine tests**. 


## Contributors

You can fork and contribute/improve this project by submitting a pull request.


## License

The source code is open-sourced software licensed under the [MIT license](LICENSE.md)
