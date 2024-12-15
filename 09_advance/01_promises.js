const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task completed");
        resolve();
    }, 1000);
})
promiseOne.then(() => console.log("Promise consumed"));

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 completed");
        resolve();
    }, 1000);
}).then(() => console.log("Async 2 resolved"));

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000);
})
promiseThree.then((data) => console.log(data));

// chaining
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "Shubham", password: "123"})
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promiseFour
.then((data) => {
    console.log(data);
    return data.username;
})
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("The promise is either resolve or rejected"))

// without .then() & .catch() using async, await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumeFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
consumeFive();

// Fetch using async/await

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();


// Fetch using promises

fetch('https://jsonplaceholder.typicode.com/users')
.then((data) => {
    return data.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

/**
 * Fetch (Microtask):

    When you call fetch, it starts an asynchronous request.
    The .then handler (or any promise resolution) is placed in the microtask queue.
    The microtask queue is processed after the current synchronous code, before the macrotask queue.


 * setTimeout (Macrotask):

    When you call setTimeout, it sets a timer and places the callback in the macrotask queue.
    The macrotask queue is processed after all microtasks are completed.


* When you receive HTTP status codes such as 402, 200, or any response from a server, who handles these
 responses in JavaScript, and is it handled by resolve() only?

Answer:
    In JavaScript, when you receive HTTP status codes (such as 402, 200, etc.) from a server, the responses are typically
    handled by the resolve() function in a promise. The resolve() function indicates that the operation was successful, and it passes the response data to the 
    .then() method for further processing.


    fetch('https://example.com/api/data')
  .then(response => {
    if (response.ok) {
      return response.json(); // handle successful response with resolve()
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log(data); // handle the data received
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

 */