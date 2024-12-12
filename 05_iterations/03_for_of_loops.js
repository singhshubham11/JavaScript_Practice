// for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) { // declare variable num(i) and arr(array)
    // console.log(num);
}

const greeting = "Hello world!";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const myarr = [1, 2, 3, 4, 5];
// console.log(myarr.map(x => x * 2));

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("fr", "France");

console.log(map);

for (const key  of map) {
    // console.log(key); // [ 'IN', 'India' ]
                      // [ 'USA', 'United States of America' ]
                      // [ 'fr', 'France' ]
}

for (const [key, value]  of map) {
    // console.log(key, ":-", value); // IN :- India
                                   // USA :- United States of America
                                   // fr :- France
}

const myobj = {
    "game1": "NFS",
    "game2": "Spiderman"
}
// OBJECTS CANNOT BE ITERATED BY FOROF LOOP
// for (const [key, value] of myobj) {
//     console.log(key, ":-", value);
// }