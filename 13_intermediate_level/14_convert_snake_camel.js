function snakeToCamel(str) {
    return str.replace(/_./g, match => match[1].toUpperCase());
}
console.log(snakeToCamel("hello_world")); // Output: "helloWorld"
