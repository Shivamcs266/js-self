// JAVASCRIPT EXECUTION CONTEXT

// {} -    GLobal Execution Context 
//  this is 3 types . 1- Global execution Context. 2- Function execution context . 3- Eval execution context. 

//  {} - Memory Creation phase (only use for allocate the memory)
//       Execution phase 

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum (val1, val2)
let result2 = addNum(10, 2)

console.log("Result: ", result1);
console.log("Result: ", result2);