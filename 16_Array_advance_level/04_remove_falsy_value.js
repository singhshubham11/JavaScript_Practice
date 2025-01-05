function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy([0, null, undefined, '', 'hello', 42])); // ['hello', 42]
