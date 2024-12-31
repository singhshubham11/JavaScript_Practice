const myArr = [];
// %DebugPrint(myArr);

/**
 * arays are basically divided in 2 types 
 * 1) continious also known as(PACKED SMI ELEMENTS)
 * 2) Holey
 * 
 * arrays are optimizse in different ways in different languages but in javascript
 * it has 3 type optimization
 * 1) SMI (samll integer)
 * 2) Packed element
 * 3) Double (float)
 * 
 * optimizations are done by v8 engine
 * if array has number at 1st place, string at 2nd place, float at 3rd place then optimization is done according to the values
 * also
 * if array has number at 1st place, holey at 2nd place (without any value), float at 3rd place then optimization is done according to the values and empty space
 * 
 * 
 * also when we apply forloop, foreach, map, for in then 
 * if array has only numbers, or only strings ...etc then optimization work differently
 * if array is mixed with number,string,holey,float then optimization work differently
 */

// PACKED_SMI_ELEMENTS(default type) and recommended: means the array is without any holes
// what we learn that PACK SMI is 1st type and optimized type are best type of an array
// in this type the elements are restrictive it will take only NUMBERS
const arr = [1, 3, 4, 5, 6];

arr.push(7.0);
// PACKED_DOUBLE_ELEMENTS
/**
 * 1st and default array is PACKED_SMI_ELEMENT 
 * when we push double value in PACKED_SMI_ELEMENT then 
 * from PACKED_SMI_ELEMENT it wil become to PACKED_DOUBLE_ELEMENTS 
 * 
 * you will think now if i will remove 7.0 from array then again it will behave like PACKED_SMI_ELEMENT 
 * but the answer is : NO (the compile does not optimize the element like that)
 * 
 */

arr.push("sam");
// PACKED_ELEMENTS

arr[10] = 12;
// HOLEY_ELEMENTS: bcoz array arr has multiple type of ELEMENTS like string, double, number, main thing is now 
// it also has gap in between [1, 3, 4, 5, 6,,,,,,12];

console.log(arr); // [ 1, 3, 4, 5, 6, 7, 'sam', <3 empty items>, 12 ]
console.log(arr.length); // 11
console.log(arr[20]); // undefined
console.log(arr[9]); // undefined

// when we access an element from array 1st it will do BOUND CHECK
/**
 * Q) when we are assessing value out of an array in HOLES? 
 * EASY: it is easy bcoz it know array start point length if you we are accessing after that (console.log(arr[20])) then it will response fast undefined 
 * 
 * Q) when we are assessing value in between of an array in HOLES like arr[9]? 
 * DIFFICULT: hasOwnProperty check is one of the most expensive check in JAVASCRIPT
 * 1) first it will do Bound check: is it in bound yes
 * 2) then it will check wether it hasOwnProperty(arr, 9) => undefined
 * 3) then check array prototype, that by mistake you have intialized the value there hasOwnProperty(arr.prototype, 9)
 * 4) as we know java has prototype nature then it will move to Object and ask does you have this value hasOwnProperty(Object.prototype, 9)
 * 
 * that is why everyone tells a line that HOLES ARE VERY EXPENSIVE
 * 
 * 
 * 
 * in CONTINOUS we will do
 * 1) BOUND CHECK: if out of bound then undefined
 * 2) hasOwnProperty(arr, 2): yes and it will return value
 * 
 */

// that is why it is recommended to donot keep holes in a array

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2[2]);

// SMI > DOUBLE > PACKED (continious) ranking
// H_SMI > H_DOUBLE > H_PACKED (holey) ranking

const arr4 = new Array(3);
// it has 3 holes and are called as HOLEY_SMI_ELEMENTS this is how it is designed
arr4[0] = '1' // bcoz wr are adding string it will directly move to HOLEY_ELEMENTS
arr4[1] = '2'
arr4[2] = '3'
// in the above approach the array is 1st HOLEY_SMI_ELEMENTS and then degraded to HOLEY_ELEMENTS
// so there is a way we can optimize it. shown below

const arr5 = [];
arr5.push('1'); // PACKED_ELEMENTS
arr5.push('2'); // PACKED_ELEMENTS
arr5.push('3'); // PACKED_ELEMENTS
// here we have saved one step optimization now the array is directly consider as PACKED_ELEMENT
// it is not like above 2 step HOLEY approach

const arr6 = [];
arr5.push(NaN);
arr5.push(Infinity);
// if we push these value then it will do optimization according to PACKED_DOUBLE

// for, for of, forEach...etc use this type of loop more rather than creating your own loop
// use internall methods which are more optimized