'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code
// https://www.freecodecamp.org/forum/t/problem-with-challenge-title-case-a-sentence/158860

function jadenCase(str) {
    str = str.split(" ", str.length);
    var upperCase = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            upperCase += str[j].substring(0, 1).toUpperCase() + str[j].substring(1, j.length).toLowerCase() + " ";
        }
        return upperCase;
    }
};
return ('');


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
