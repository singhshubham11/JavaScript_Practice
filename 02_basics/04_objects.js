// sinleton 

const tinderuser = new Object();
tinderuser.id = "123abc";
tinderuser.username = "josh";
tinderuser.isLoggedIn = false;
// console.log(tinderuser);

const regularUser = {
    email: "ss@ss.com",
    fullname: {
        username: {
            firstname: "karan",
            lastname: "aujhla"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2); // it is like concat in array difference is here we use Object.assign() but we use it very less in projects

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// IMP used in database in projects

// console.log(Object.keys(tinderuser)); // [ 'id', 'username', 'isLoggedIn' ] ouptut will be an array and can perform for loop etc we can use it
// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser)); // each and every key-value will be stored in a array form [ [ 'id', '123abc' ], [ 'username', 'josh' ], [ 'isLoggedIn', false ] ]

// console.log(tinderuser.hasOwnProperty("username")); // return true or false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kunal"
}
// another way to access data from objects instead of course.price or course["price"]

// const {courseInstructor} = course;
// console.log(courseInstructor); // kunal

const {courseInstructor: fast} = course; // if name is long then by using : we can use it as key-value we can also access the data
console.log(fast); // kunal