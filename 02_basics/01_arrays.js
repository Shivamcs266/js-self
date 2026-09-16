// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "batman"]

const myArr2 = new Array (1, 2, 3, 4)
// console.log(myArr[4]);


// Array methods

// myArr.push(6)    //to add new value
// myArr.push(7)
// myArr.pop()   //to remove last added value

// myArr.unshift(9)  //to add new value in start the array.
// myArr.shift()     // to remove the value which is add in start the array.
// console.log(myArr);

// console.log(myArr.includes(8)); //it 8 is having then show true otherwise show False.
// console.log(myArr.indexOf(4));  // it is given the 4th number array value.
// console.log(myArr.indexOf(3));  // it is also given the 3rd number array value.

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); 


//********Slice, Splice */

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //give the 1,2 value. expect 0 or 3 number array.

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) //print splice "original array ko manipulate kr deta hai." beech ke part ko gayab kr deta hai jese 1,2,3 ko"
console.log("C", myArr);

console.log(myn2);



