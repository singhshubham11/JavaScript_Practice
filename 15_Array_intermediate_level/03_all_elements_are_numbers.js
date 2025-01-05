function allNumbers(arr) {
    return arr.every(el => typeof el === 'number');
}
console.log(allNumbers([1, 2, 3])); // true
console.log(allNumbers([1, "2", 3])); // false
