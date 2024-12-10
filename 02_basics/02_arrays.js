const marvelHeros = ["thor", "hulk", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros); // [ 'thor', 'hulk', 'spiderman', [ 'superman', 'flash', 'batman' ] ] an array inside an array
// console.log(marvelHeros[3][1]); // flash

// const allHeros = marvelHeros.concat(dcHeros); // concat returns a new array
// console.log(allHeros); // [ 'thor', 'hulk', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread :- thing just like a glass which is drop and it pieces are spread.

const all_new_heros = [...marvelHeros, ...dcHeros]; // all values in these arrays will be spread
// console.log(all_new_heros); // [ 'thor', 'hulk', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [2, 3, [4, 5]]]; 
const depth_array = another_array.flat(Infinity); // the flat will take the depth of array and return a new array without sub-arrays.
// console.log(depth_array); // [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5]

// console.log(Array.isArray("shubham")); // false
// console.log(Array.from("shubham")); // [ 's', 'h', 'u', 'b', 'h', 'a', 'm' ] convert string to an array


const score1 = 100;
const score2 = 200;
const score3 = 300;

// convert all score into a array 
//of and from both do samething

const allScore = Array.of(score1, score2, score3);
console.log(allScore); // [ 100, 200, 300 ]


// ++++++++++++++++++ Difference between of & from +++++++++++++++++++++++++++
/**
 * Array.of(1, 2, 3) clearly states that you are creating an array with those values.

 * Array.from(arrayLike) clearly indicates you are converting an array-like structure to a real array.
 */