// in JS Date object date start from 1 january 1970

let myDate = new Date();
// console.log(typeof myDate); //object
// console.log(myDate);                      // 2024-12-10T08:58:45.926Z
// console.log(myDate.toString());           // Tue Dec 10 2024 08:58:45 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());       // Tue Dec 10 2024
// console.log(myDate.toTimeString());       // 09:03:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString()); // 12/10/2024
// console.log(myDate.toLocaleString());     // 12/10/2024, 9:03:22 AM
// console.log(myDate.toISOString());        // 2024-12-10T09:03:22.206Z
// console.log(myDate.toJSON());             // 2024-12-10T09:03:22.206Z
// console.log(myDate.toUTCString());        // Tue, 10 Dec 2024 09:03:22 GMT

let myOwnDate = new Date(2023, 0, 4);  // in JS January has 0 index
// console.log(myOwnDate.toDateString()); // Wed Jan 04 2023 

let myOwnDate1 = new Date(2023, 0, 4, 5, 3); // using hours and minutes
// console.log(myOwnDate1.toLocaleString());    // 1/4/2023, 5:03:00 AM

//+++++++++++++++++++++ TimeStamps ++++++++++++++++++++++++

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1733822258258 millisecconds form 1 january 1970

// console.log(myOwnDate.getTime()); // on this what was the time 
// console.log(Math.floor(Date.now() / 1000)); // converting milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);