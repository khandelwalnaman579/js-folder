// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);

console.log("2" > 1);
console.log("02" > 1);
 
/// code where inconsistency comes
console.log(null > 0);//false
console.log(null == 0); // false
console.log(null >= 0);//true (inconsistency)

console.log(undefined > 0);//false
console.log( undefined == 0);//false
console.log(undefined >= 0);//false

//  === (strictly check the values) - check datatypes also

console.log("2" === 2);
