// in terminal run: node 01basics/01variable.js
const accountId = 12345;
let accountEmail = "namankhandelwal579@gmail.com";
var accoountPassword = "12345@Naman";
accountCity = "New Delhi"; // not a good practice to declare variable without var, let or const
let accountState; // undefined
console.log(accountId);

//accountId = 23456; // not allowed
console.log(accountId);
console.log(accountEmail);
accountEmail = "H3@FDHFDL.COM";
accoountPassword = "67890@Naman";
accountCity = "Mumbai";
/*
Prefer not to use var for variable declaration
because of the issue in block scope and function scope
*/

console.table([accountId, accountEmail, accoountPassword, accountCity, accountState]);