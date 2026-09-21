// var c = 300
let a = 300           // global scope

if (true){            //block scope - {}
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shivam"

    function two(){                // child function apne parent function ke variable ko access kar skte hai.
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


// example - 3

if (true){
    const username = "Shivam"
    if (username === "Shivam"){
        const website = " Youtube"
        //console.log(username + website);
    }
    // console.log(website)   //for access
}

// console.log(username);


// *********************** Interesting****************

console.log(addone(5));

function addone(num){           // is type ke function main use kr skte hai.
    return num + 1
}

//addone(5)

// addTwo(5)            //declairation se pehle use nhi kar skte hai.
const addTwo = function(num){   // is type ke write function main use nhi kar skte hai.
    return num + 2
}

