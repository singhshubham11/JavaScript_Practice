function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// call is a tool in JavaScript that lets you borrow a function and make it run as if it belongs to another object.

// In SetUsername.call(this, username), here’s what’s happening:
// this refers to the object being created by createUser (in this case, the object that will eventually hold username, email, and password).

// call tells SetUsername:
// “I know you normally work on your own, but for now, act like you’re working inside this new object being created by createUser.”
// The username argument is passed along, so SetUsername does its job for the new object.