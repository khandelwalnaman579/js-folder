const score = 5;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1234.5678;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++Math -- Object+++++++++++++++++++++
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.min(4,6,8,2,5));
console.log(Math.max(4,6,8,2,5));
console.log(Math.pow(2,3));
console.log(Math.sqrt(64)); 


console.log(Math.random());
console.log(Math.floor(Math.random()*10));// random number between 0-9
console.log(Math.floor(Math.random()*10)+1);// random number between 1-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);// random number between min-max (both included)

