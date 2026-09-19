// const tinderUser = new Object ()  //singleton object
const tinderUser = {}                 // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sanny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shivam",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // object.assign is used to assign objects.

const obj3 = {...obj1, ...obj2}   //spread method (liked array) Three dot ...
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// console.log(tinderUser.hasOwnProperty("isLogged"));

//***********Dstructuring */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} = course
console.log(instructor);


// ********* JSON API*************

// {                        //Object formate Api
//     "name" : "Shivam", 
//     "coursename" : "js-in-hindi",
//     "price" : "free"
// }


