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
    // console.log(this); // When using console.log(this); in Node.js, in a function then we will get so many methods 
}
chai();

function chai1() {
    let username = "kites";
    console.log(this.username); // this cannot be used in functions
}
chai1();