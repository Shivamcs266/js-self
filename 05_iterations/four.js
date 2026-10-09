const myObject = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//for in loop use in Array

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

// for-in loop use in Map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('FR', "France")

// for (const key in map) {            //map ko itteration nahi kar skte hai, not iterable hota hai.
//    console.log(key);
// }                                 


// **********objects ke andar for-in loop lagate hai,
// **********array ke andar for-of loop lagate hai,