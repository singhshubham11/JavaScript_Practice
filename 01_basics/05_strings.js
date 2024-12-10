// in javascript we can declare string in " " and ' '
const userName = "Shubham";
const repoCount = 3;

console.log(userName + repoCount + " Value"); // old way to concatenate strings

console.log(`hello my name is ${userName.toUpperCase()} and my repo count is ${repoCount}`);

const myName = new String('Rajesh');
console.log(myName[0]);
console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.charAt('4'));
console.log(myName.indexOf('j'));

/**
 * in summary, both slice and substring can cut pieces out of strings, 
 * but slice is more precise and handles negative numbers, while substring is
 * more flexible with the positions but doesn’t understand negative numbers. 
 * Now you can choose the right tool for the job when working with your JavaScript candy!
 */

const newString = myName.substring(0, 4); // last value 4 will not be included
console.log(newString);

const anotherString = myName.slice(2, 4);
console.log(anotherString);

const anotherString1 = "    shubham    ";
console.log(anotherString1);
console.log(anotherString1.trim());

const url = "https://shubham.com/shubham%20singh";
console.log(url.replace('%20', '-'));

console.log(url.includes('singh'));

const newString2 = "shubham-is-from-hyderabad"; // coveting string in to an array.
console.log(newString2.split('-'));