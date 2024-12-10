let myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);
let myHeros = ["Shubham", "Sohan"];
let myArr2 = new Array(0, 1, 2, 3, 4, 5);

// Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();   // last element will be removed automatically

// myArr.unshift(9); // same like push() add value at 0 index
// myArr.shift();    // same like pop() remove elemnt at 0 index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // converts array into string
// console.log(newArr); // 0,1,2,3,4,5 output is like array but its typeOf(newArr) is String

// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Extracts a section of an array and returns a new array without modifying the original.
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // Adds/removes items to/from an array and returns the removed items, modifying the original array.
console.log("C ", myArr);
console.log(myn2);
