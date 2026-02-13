let myDate = new Date();
console.log(myDate); // Current date and time
console.log(typeof myDate); // object

console.log(myDate.toString()); // String representation of the date
console.log(myDate.toDateString()); // Date portion as a string
console.log(myDate.toTimeString()); // Time portion as a string
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toUTCString()); // UTC formatk
console.log(myDate.toLocaleString()); // Localized string representation

//let myCreationDate = new Date(2023, 0, 23);
//let myCreationDate = new Date("2023-01-23");


console.log(myCreationDate.toDateString());

let timestamp = Date.now();
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

