
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
// console.log(loginUserMessage("Shivam"))

//*************Rest operator**********/

// function calculateCartPrice(...num1){             //rest and spread operator.
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// 

const user = {                //object ko function main kese use kiya jata hai.
    username: "shivam",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject (user)
handleObject({             //direct object bhi paas kr skte hai
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]))     //direct function main object se return lena.