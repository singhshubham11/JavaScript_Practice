// const userEmail = "ss@ss.com";

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Dont have user email")
// }

/* 
+++++++++ Falsy values +++++++++++++++
    false, 0, -0, BigInt => 0n, "", null, undefined, Nan except this all are truthy values

++++++++++ Truthy values ++++++++++++
    "0", 'false', " ", [], {}, function(){} anything in a string is a truthy value

    "" => falsy value
    " " => space between double quotes is truthy value
*/

// how to check wether array and object is empty

const myArr = [];
if (myArr.length === 0) {
    console.log("Array is empty");
}

const myObj = {};
if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): is made for only null & undefined
// The condition is whether the value is null or undefined. If a value is either null or undefined, 
//the operator moves to the next value. If it's not null or undefined, it uses that value.

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10 
// val1 = undefined ?? 15; // 15
// val1 = null ?? 20 ?? 40; // 20 

// console.log(val1);

// Function that returns null
function returnNull() {
    return null;
}
  
  // Function that returns 20
  function returnTwenty() {
    return 20;
}
  
  // Function that returns 40
  function returnForty() {
    return 40;
}
const result = returnNull() ?? returnTwenty() ?? returnForty();
console.log(result); // Output: 20
  
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");