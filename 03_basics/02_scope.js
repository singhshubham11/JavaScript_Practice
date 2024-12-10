// global scope
let a = 10;
const b = 20;
var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// block scope
if (true) {
    let a = 100;
    const b = 200;
    var c = 300;
}

// console.log(a); // scope error
// console.log(b); // scope error
// console.log(c); // var => 300 is accessed outside scope. that is why is depricated


// nested functions
function one() {
    const username = "Shubham";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    console.log(website);

    two();
}
// one();

if (true) {
    const username = "shhubham";
    if (username === "shhubham") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++ intresting ++++++++++++++++++

console.log(addone(5)); // 6

function addone(num) { // this is function
    return num + 1;
}

console.log(addone(5)); // 6

//-------------------------

// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function (num) { // this is also a function but called as expression
    return num + 2;
}
console.log(addTwo(5)); // 7