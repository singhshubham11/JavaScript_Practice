// Immediately Invoked Function Expressions (IIFE)


// ++++++++++++ NORMAL FUNCTION ++++++++++++++++++
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai();


// ++++++++++++++++++++ Immediately Invoked Function Expressions +++++++++++++

( function chai() {
    console.log(`DB CONNECTED`);
} )
();

( () => {
    console.log(`DB CONNECTED 2`)
} )
();

( (username) => {
    console.log(`DB CONNECTED 2 ${username}`)
} )
("Shubham");