const name = "Shivam"
const repoCount = 50

// console.log(name + repocount + "value");  // this is not a good practice to add a value or string.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // this is good practice.  *backticks(``)

const gameName = new String ("shivamsharma")

/*
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
*/

console.log(gameName.charAt(10));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)     //output: shiv 
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "       shivam      " 
console.log(newStringOne);
console.log(newStringOne.trim());    //white space

const url = "https://shivam.com/shivam%20sharma"       //replace any name or number
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));      //to check sundar is exists or not.

console.log(gameName.split('-'));
