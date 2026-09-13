// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   //interview related question. Date is object type..

// let myCreatedDate = new Date (2026, 8, 13)  //month zero se start hote hai JS main.
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date (2026, 8, 13, 23, 41)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date ("2026-09-13")  //"yyyy-mm-dd"
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date ("09-13-2026") //"mm-dd-yyyy"
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1 );



