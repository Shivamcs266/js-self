const user = {
    username: "shivam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)   //this= current context ko reffer karta hai.
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"   //context means values and variables kya kya hold kr rhi hai video.
user.welcomeMessage()

console.log(this);


// example --         this function ke andar use kar skte hai ese function k andar use nhi kar skte hai


// function chai (){
//     let username = "shivam"
//     console.log(this.username);
// }

// chai()     this method


// const chai = function () {
//     let username = "shivam"
//     console.log(this.username);
// }

// chai()

const chai = () => {        // arrow => function ke andar empty paranthis aata hai. (Syntax- () => {}
    let username = "shivam"
    console.log(this);
}

// chai()

// () => {}   Arrow function syntax

// const addTwo =(num1, num2) => {         //basic arrow function
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2    // implisit function (maan leta hai ki)  // implicit return curly braces lagane padta hai.

// const addTwo = (num1, num2) => ( num1 + num2)   // parenthesis mainwrap karne par return nhi likhna padta hai, if curly bracis use kiya to return keyword likhna padega.

const addTwo = (num1, num2) => ({username: "Shivam"})           //explicit () parenthisis lage hue ko kehte hai.

console.log(addTwo(3, 4))