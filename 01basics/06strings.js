const name ="naman";
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String ("naman finance")

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.substring(0,5));
console.log(gameName.charAt(5));
const newStringOne = gameName.slice(-2, 4);
console.log(newStringOne);
console.log(gameName.trim());//remove vacant space
console.log(gameName.replace('naman', 'aman'));// replace the values
console.log(gameName.split('i'));//split based on ('i')
console.log(gameName.includes('finance'));//true/false
