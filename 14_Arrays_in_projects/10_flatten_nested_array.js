const nested = [1, [2, [3, 4]]];
console.log(nested.flat(1)); // [1, 2, [3, 4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
