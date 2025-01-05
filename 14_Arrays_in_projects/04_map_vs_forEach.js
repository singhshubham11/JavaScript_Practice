const arr = [1, 2, 3];

// map returns a new array
const doubled = arr.map(x => x * 2); // [2, 4, 6]

// forEach does not return anything
arr.forEach(x => console.log(x * 2)); // Logs 2, 4, 6
