// Object Literal
const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}

// console.log(user.username)
// console.log(user["username"])
// console.log(user.getUserDetails());
// console.log(this); // {}



// Constructor Function without new keyword
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = User("Shubham", 12, true)
// const userTwo = User("Singh", 11, false)
// console.log(userOne); 
// console.log(userTwo);

/**
 * The new keyword creates a new object in memory for each instance.
 * Without new, the function doesn't create a new object, and this doesn't behave as expected for object-oriented usage. 
 * Always use new when working with constructor functions.
 */


//constructor and new keyword

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Shubham", 12, true)
const userTwo = new User("Singh", 11, false)
console.log(userOne.constructor); // [Function: User]
console.log(userTwo); // User {
                        //     username: 'Singh',
                        //     loginCount: 11,
                        //     isLoggedIn: false,
                        //     greeting: [Function (anonymous)]
                        //   }

/**
 * With the new keyword:
Object Creation: When you use new, JavaScript treats User as a constructor function.
                 A new, empty object is created automatically (let obj = {}).
                 The this keyword inside the function refers to this newly created object.
                 The function's prototype is linked to the newly created object's prototype chain.
                 The new object is returned automatically (unless you explicitly return another object).


Creates a new memory space for each userOne and userTwo instance.
this inside User now refers to the newly created object, so the properties (username, loginCount, isLoggedIn) are set on it.
The greeting method is attached to each new object.
 */