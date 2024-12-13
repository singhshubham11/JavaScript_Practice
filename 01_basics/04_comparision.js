// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // true // In this case, the string "2" is converted to the number 2.
                              // This happens because JavaScript uses the built-in Number function for type coercion during comparisons.
console.log("02" > 1); // true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// when we use null with comparision operator it is converted to number 0
// when we use it with equal == it behave different

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check it check value with data type
// == only check type.

console.log("2" === 2);