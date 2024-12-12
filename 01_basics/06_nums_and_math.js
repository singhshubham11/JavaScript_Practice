const score = 256;
console.log(score);

const balane = new Number(299);
console.log(balane); // [Number: 299]

/**
 * while both const score = 256; and const balance = new Number(299);
 * represent numbers, the first is a primitive value that is simpler and more efficient, 
 * while the second is a Number object that offers more functionality at the cost of additional memory and complexity. 
 * For most use cases, sticking with primitive numbers is the best approach.
 */


console.log(balane.toString().length);

let price = 2234.6666777888990000
console.log(price.toFixed(2)); // 2234.67

const hundreds = 100000;
console.log(hundreds.toLocaleString()); //as per US standards 100,000
console.log(hundreds.toLocaleString('en-IN')); // as per INDIA standards 1,00,000

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // convert negative value to positive but NOT positive to negative
console.log(Math.round(4.6)); // round off the number above 4.6 => 5 and below 4.5 => 4
console.log(Math.ceil(4.2)); // as name suggest it will round off 4.2 => 5
console.log(Math.floor(4.2)); // it will round off 4.2 => 5
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0.3131554673806112 generate value between 0 to 1
console.log(Math.random() * 10 + 1); // 0.3131 * 10 = 3 that is why we multiply with 10
                                    // there is a chance of getting 0.01072937 * 10 => 0 + 1 => 1 so we add 1 when we not want zero

console.log(Math.floor(Math.random() * 10) + 1);       

const min = 10;
const max = 20;

// used in DSA
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // humesha value 10 & 20 ke between hi ayega