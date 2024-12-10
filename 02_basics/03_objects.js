// Singleton
// Object.create

// object literals

const mysym = Symbol("key1");

const jsUser = {
    username: "Shubham",
    [mysym]: "mykey1",
    age: 18,
    location: "Raipur",
    email: "Shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Staurday"]
}
// ++++++++ 2 ways to access objects ++++++++++
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// ++++++++++++++ way to access symbol interview question +++++++++++++
// console.log(jsUser[mysym]);

// when we freeze the jsUser object then we cannot make any changes to it.
// jsUser.email = "Shubham@chatgpt.com";
// Object.freeze(jsUser);
// jsUser.email = "Shubham@microsoft.com";
// console.log(jsUser);

// functions in Object
jsUser.greeting = function () {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.username}`);
}
console.log(jsUser.greeting());
jsUser.greetingTwo();