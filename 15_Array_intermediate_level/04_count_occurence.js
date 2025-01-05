function countOccurrences(arr) {
    return arr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences(['a', 'b', 'a', 'c', 'a'])); // {a: 3, b: 1, c: 1}
