function printName() {
    console.log('S');
    console.log('h');
    console.log('u');
    console.log('b');
    console.log('h');
    console.log('a');
    console.log('m');
}
// printName; // this is functions refrence
// printName(); // if you want to execute function use () parenthesis


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber(3, 4);

function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // return result;
    // console.log("jack");  // after return nothing is going to execute

    return number1 + number2;
}
const result = addTwoNumber(3, 4);
// console.log(result);

function loginUserMessage(username = "singh") { // if nothing is passed then default value singh will be printed on console
    if (!username) {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Shubham")); // Shubham just logged in
// console.log(loginUserMessage("")); // please enter a username
//                                    // undefined
// console.log(loginUserMessage());   // singh just logged in


// suppose while calculating price of 20 products we not use 20 arguments in function so the best practise is given below

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 600)); // 200, 400 goes in val1,2 and num1 is [500, 600] in array format

const user = {
    username: "jaju",
    price: 300
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray = [100, 200, 300, 400, 500, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));