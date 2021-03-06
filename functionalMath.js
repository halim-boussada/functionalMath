/* functionalMath
 *
 * Instructions:
 *
 * 1. Define functions for each digit, from 'zero' to 'nine'.
 *
 * 2. Write out functions for the following mathematical operators:
 *    plus, minus, multipliedBy, and dividedBy.
 *
 * The most outer function represents the left operand, and the most
 * inner function represents the right operand.
 *
 * Examples:
 * seven(multipliedBy(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 * six(multipliedBy(five(multipliedBy(three())))); //must return 90
 *
 * HINT: This is functional programming, think about what each of
 *       these functions should return based on their arguments.
 */

"use strict";

var zero = function () {};
var one = function () {};
var two = function () {};
var three = function () {};
var four = function () {};
var five = function () {};
var six = function () {};
var seven = function () {};
var eight = function (func) {};
var nine = function () {};

//Math Operators

var plus = function () {};
var minus = function () {};
var multipliedBy = function () {};
var dividedBy = function () {};

//////////// DONT TOUCH THIS PART ////////////////
console.log(seven(multipliedBy(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(six(multipliedBy(five(multipliedBy(three())))));
/////////////////////////////////////////////////
