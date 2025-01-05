function groupBy(arr, fn) {
    return arr.reduce((acc, el) => {
        const key = fn(el);
        acc[key] = acc[key] || [];
        acc[key].push(el);
        return acc;
    }, {});
}
console.log(groupBy(['apple', 'banana', 'cherry', 'avocado'], str => str[0]));
// {a: ['apple', 'avocado'], b: ['banana'], c: ['cherry']}
