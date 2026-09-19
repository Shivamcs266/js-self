
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(5,10) // for function run

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result          // function ki defination hai, return likhne ke baad khuch bhi execute nhi hoga.
    return number1 + number2
}
const result = addTwoNumbers(5,10)  // return k baad function ko variable main store kr sakte hai.

// console.log("Result: ", result);

function loginUserMessage(username  = "sam"){
    if(username === undefined){   // (!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shivam"));
console.log(loginUserMessage("Shivam"))