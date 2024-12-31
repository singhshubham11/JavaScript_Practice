function countFrequency(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
console.log(countFrequency([1, 2, 2, 3, 3, 3])); 
// Output: {1: 1, 2: 2, 3: 3}
