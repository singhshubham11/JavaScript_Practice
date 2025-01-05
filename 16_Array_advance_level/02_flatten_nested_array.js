function flattenArray(arr) {
    return arr.reduce((acc, el) => 
        Array.isArray(el) ? acc.concat(flattenArray(el)) : acc.concat(el), 
    []);
}
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
