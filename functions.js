/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 var numStr = function (n){
  if (typeof n != 'number')
    { return false; }
  return n.toString();
 };

 console.log(numStr(10));

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var plusOne = function(n){
  return n + 1;
};

console.log(plusOne(0));

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
var minusOne = function(n){
  return n -1;
};

console.log(minusOne(1));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var sum = function(x,y){
  return x + y;
};

console.log(sum(3,2));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

var difference = function (x,y){
  return x - y;
};

console.log(difference(8,4));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var product = function (x,y){
  return x * y;
};

console.log(product(3,1));
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

var quotient = function(x,y){
  return x/y;
};

console.log(quotient(2,1));
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

var squared = function(x){
  return x * x;
};

console.log(squared(9));

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

var operationMath = function(operation, x,y){

  if(operation === "add"){
    var result = x + y;
    console.log(x + " + " + y + " = " + result);
    return result;
  }
  else if(operation === "subtract"){
    var result = x - y;
    console.log(x + " - " + y + " = " + result);
    return result;
  }
  else if(operation === "multiply"){
    var result = x*y;
    console.log(x + " * " + y + " = " + result);
    return result;
  }
  else{
    var result = x/y;
    console.log(x + " / " + y + " = " + result);
    return result;
  }
};

console.log(operationMath("add", 2, 5));




/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

var aLarge = function(a,b){
  if (a > b) { return true; }
  else {return "a is larger than b";}
};

console.log(aLarge(1,2));
console.log(aLarge(2,1));

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var aSmall = function(a,b){
  if (a < b) { return true; }
  else {return "a is smaller than b";}
};

console.log(aSmall(1,2));
console.log(aSmall(2,1));

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

var isEqual = function(a,b){
  if (a === b) { return "the numbers are equal";}
};

console.log(isEqual(1,1));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

var smallestNum = function(x,y){
  return Math.min(x,y);
};

console.log(smallestNum(7,100));

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

var largestNum = function(x,y){
  return Math.max(x,y);
};

console.log(largestNum(0,100));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

var evenNum = function(n){
  if( n % 2 === 0){
    return "the number is even";
  }
};

console.log(evenNum(4));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

var oddNum = function(n){
  if( n % 2 === 1){
    return "the number is odd";
  }
};

console.log(oddNum(5));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

var grade = function (score, total){
  var n = score / total * 100;

 if (n >=90){ return "A : 90- 100%";}
 else if
  ( n < 90  && n >= 80) return "B: 80-89%";
 else if
  ( n < 80  && n >= 70) return "C: 70-79%";
 else if
  ( n < 70  && n >= 60) return "D: 60-69%";
 else if
  (n < 60) return "F : 0- 59%";
};

console.log(grade(69,100));

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

var restaurant= {
};

var checkReview = function(reviews){
  if (restaurant.reviews !== undefined){
    return restaurant.reviews + 1;}
    else return restaurant.reviews = 1;
};

console.log(checkReview(restaurant));
console.log(restaurant);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(word1, word2){
  return word1 + " " + word2;
}

console.log(combine("banana", "pen"));

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

var circle = {};

 var makePie = function (radius){
  var area = Math.PI * radius * radius;
  var circumference = 2 * Math.PI * radius;
  circle.circumference = circumference;
  circle.area = area;
  return circle;
 };

 console.log(makePie(3,4));

