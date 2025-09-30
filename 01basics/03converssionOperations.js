let score = "33";

  
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// "33"=> 33
// "33ac" => NaN
//  mull= => 0
// undefined => NaN
//true => 1
//false => 0
//"string" => NaN
//"" => 0 //empty string

let isLogIn = 1;

let booleanIsLogIn =Boolean(isLogIn);
console.log(booleanIsLogIn);


//1 => true; 0 => false
// "" => false 
// "naman" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// ********************** operations *****************************
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2/2);
//  console.log(2%2);
 
let str1 = "hello!"
let str2 = " naman"
str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 +"2");


// tricky conversion 
console.log(true);//output - true(boolean)
console.log(+true);// output - 1 

//console.log(true+); provide error in code 
console.log(+""); // output  -- 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;//chaining operator

// study prefix and postfix operator