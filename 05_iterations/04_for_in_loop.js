// for in
const myobj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
    // console.log(myobj[key]);
}

const arr = ["js", "ps", "rb", "java"];

for (const key in arr) {
    // console.log(key); // 0 1 2 3 are the keys of arr
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("fr", "France");

// console.log(map);

for (const key in map) {
    console.log(key); // no outpurt because maps cannot be iterated
}

/**
 * for...of: Ideal for iterating over iterable objects like arrays, where you want to access the values directly.

 * for...in: Ideal for iterating over the keys of objects but can lead to issues when used with arrays or objects with 
   non-enumerable properties
 */