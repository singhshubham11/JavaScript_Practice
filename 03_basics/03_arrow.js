const user = {
    username: "Shubham",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // When using console.log(this); in Node.js, this refers to an empty object because
                   // it's in the global scope. However, when used in a browser (chrome), this refers to the window object.

function chai() {
    console.log(this); // When using console.log(this); in Node.js, in a function then we will get so many methods 
}
// chai();

function chai1() {
    let username = "kites";
    console.log(this.username); // this cannot be used in functions
}
// chai1();

// const garam = function () {
//     let username = "kites";
//     console.log(this.username); // // this cannot be used in functions
// }
// garam();

const garam =  () => {
    let username = "kites";
    console.log(this.username); // this cannot also be used in Arrow functions
}
// garam();


// ++++++++++++ Explicit return ++++++++++++++
// const addTwo = (num1, num2) => {
//     return num1 + num2; // myselff writing return keyword
// }
// console.log(addTwo(3, 4));


// ++++++++++ Implicit return ++++++++++++
// const addTwo = (num1, num2) => num1 + num2; // not writing any return keyword detectin automatically
// const addTwo = (num1, num2) => ( num1 + num2 ); // mostly used in react with () brakets to return object.
const addTwo = (num1, num2) => ( {username: "Karan"} ); // we cannot pass {username: "Karan"} directly without using () it will throw undefined
console.log(addTwo(3, 4));