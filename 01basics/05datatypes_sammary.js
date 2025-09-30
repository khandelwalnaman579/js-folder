// Primitive 

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 34982032004204094092n;


// Reference (Non primitive)

//Array, Objects, Funtions

const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name:"hitesh",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);//object-null
console.log(typeof myObj);//object
console.log(typeof myFunction);//function

// +++++++++++++++++++++++++++++++++++++++++++++

//stack(premitive)-create copy,, heap(non-premitive)-provide reference

let myYoutubeName ="namankhandelwal";
let anothername = myYoutubeName;
anothername ="naman";
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "man@meme.com",
    upi: "user@ybl"

}
let userTwo = userOne;
userTwo.email ="naman@finance.com";

console.log(userOne.email);
console.log(userTwo.email);
