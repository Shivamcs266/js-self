// singleton
// object.create

//object literals

const mySym = Symbol("key1") 

const JsUser = {            //object Declair 
    name: "Shivam",
    age: 24,
    [mySym]: "myKey1",   // for Reffer a Symbol use []
    location : "Ghaziabad",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full name": "shivam sharma"
}

// console.log(JsUser.email);
// console.log(JsUser ["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email ="shivam@chatgpt.com"  // == double eqal to use for override the value.
// Object.freeze(JsUser)    //to use for freeze value not change by anyone.
JsUser.email = "shivam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //refrence value
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
