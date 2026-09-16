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

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr); 


//********Slice, Splice */

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //print slice

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) //print splice "original array ko manipulate kr deta hai." beech ke part ko gayab kr deta hai jese 1,2,3 ko"
console.log("C", myArr);

console.log(myn2);



