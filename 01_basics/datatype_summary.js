// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //Number

const isLoggedIn = false //boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')                 //Symbol
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 485993849393894n  //bigInt


// Reference (Non Primitive)

// Array, Object, Function

const heroes = ["Shaktiman", "Batman", "Superman"];

let myObj = {
    name: "Shivam",
    age: 26,
}

const myFunction = function(){
    console.log("Hello World");
}

console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail] );

console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof myFunction);
console.log(typeof heroes);



