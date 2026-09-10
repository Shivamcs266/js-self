// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //Number

const isLoggedIn = false //boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')                 //Symbol
const anotherId = Symbol('123')
//console.log(id === anotherId);

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

//console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail] );

/*
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof myFunction);
console.log(typeof heroes);
*/

// ********************Memory************************

// Stack (Primitive), Heap (Non Primitive)
 
let myYoutubename = "Shivammax2"    //stack memory example

let anothername = myYoutubename
anothername = "shivamontrack"

console.log(myYoutubename);
console.log(anothername);

let userOne = {                //heap memory example 
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "shivam@google"

console.log(userOne.email);
console.log(userTwo.email);