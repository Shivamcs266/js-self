
// arthmetic operator's - 
// less than- <, greater than- >, lessthan Equal to - <=, greaterthan equal to- >=, not equal to- !=, type checking/ strict checking- ===.

// if 



// const  isUserloggedIn = true

// if ( 2 == "2" ) {
//     console.log("Executed"); 
// }

// if ( 2 === "2" ) {
//     console.log("Executed2"); 
// }

// example- 

// const temperature = 41

// if (temperature < 50) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");

//------------------

// const temperature2 = 44

// if (temperature2 === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("executed");


// const score = 200

// if (score > 100 ) {
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }

// console.log(`User power: ${power}`);  //block scope curly bracic ke bahar execute nhi karta, isi jagh const ke alawa agar var variable main value assign krte to execute ho jata without error ke.



// const balance = 1000

// //if (balance > 500) console.log("test"), console.log("test2"); // not a good pratice

// if (balance < 500) {
//     console.log("less than");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitcard ){  // && - "to add multiple statment"
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {      // use multiple condition inme se ek bhi true hogi to execute ho jayega.
    console.log("user logged in successfully");
    
}