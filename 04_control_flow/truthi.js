const userEmail = "shivam@ai"   //if string value that shows true value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//***************** */


// const userEmail1 = ""   //if string value is empty that shows false value

// if (userEmail1) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//***************** */


// const userEmail2 = []   //if array value is empty that shows true value

// if (userEmail2) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//false values

// false, 0, -0 (zero, negative zero), BigInt 0n (Zero n),""(empty string), null, undefined, NaN

//truthy values : string ke andar khuch bhi value add ho jaye truthy value hoti hai.

// "0", 'false', " ", []- empty array, {} -empty object, function (){}  interview= False == 0 => 0

if (userEmail.length === 0) {
    console.log("Array is empty");   
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//logical operator

// const userLoggedIn = true
// const debitcard = true
// const loggedInFromGoogle = true
// const loggedInFromEmail = true

// if (userLoggedIn && debitcard ){  // && - "to add multiple statment"  (& operator- jitni bhi conditon hai bo saari ki saari true aani chaiye.)
//     console.log("Allow to buy course");
    
// }

// if (loggedInFromGoogle || loggedInFromEmail) {      // use multiple condition inme se ek bhi true hogi to execute ho jayega. (|| or operator- sirf ek bhi condition true hona chahiye)
//     console.log("user logged in successfully");
    
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20   //always null ke baad pehli value assign hogi.

console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")