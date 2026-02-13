//arrays
const myArr = [1, 2, 3, 4,"hello", true];//0 based indexing
console.log(myArr);
console.log(typeof myArr); //object`

//Array Methods
myArr.push("new item"); //add item at the end
console.log(myArr);
myArr.pop(); //remove item from the end
console.log(myArr);

myArr.unshift(8); //add item at the beginning
console.log(myArr);
myArr.shift(); //remove item from the beginning
console.log(myArr);
console.log("Length of array is ", myArr.length); //length of array

const newArr = myArr.join(); //convert array to string
console.log(typeof newArr);

//slice and splice
console.log("a",myArr);
const slicedArr = myArr.slice(1,4); //slicing array from index 1 to 3
console.log(slicedArr); 
console.log("b",myArr);    
const myArr2 = myArr.splice(1,4); //from index 1 to 4, remove 4 items  and manipulate the array
console.log("c",myArr);
console.log(myArr2);