// if
const isUserLoggedIn = true;
const temparature = 99;

if (temparature < 50) {
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;
if (score > 100) {
    const power = "fly";
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // scope Error

// const balance = 1000;
// if (balance > 500) console.log("test"); // implicit if

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}