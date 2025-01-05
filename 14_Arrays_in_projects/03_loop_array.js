const arr = [10, 20, 30];
// Using for loop
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// Using for...of
for (const num of arr) console.log(num);

// Using forEach
arr.forEach(num => console.log(num));
