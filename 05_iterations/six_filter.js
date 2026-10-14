// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);       //forEach loop main value ko return nhi karta hai, undefind hi show hota hai.

//******** filter loop******* */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 5)

// const newNums = myNums.filter( (num) => {          // scope ke andar return likhenge  tabhi hi output aayega.
//     return num > 5                     
// })


//** second method but same work*****/

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

//Practice filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, 
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1990, 
    edition: 2010 },
    { title: 'Book Three', genre: 'History', publish: 1980, 
    edition: 2009 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1990, 
    edition: 2006 },
    { title: 'Book Five', genre: 'Science', publish: 2004, 
    edition: 2006 },
    { title: 'Book Six', genre: 'Fiction', publish: 1989, 
    edition: 2004 },
    { title: 'Book Seven', genre: 'History', publish: 2006, 
    edition: 2012 },
    { title: 'Book Eight', genre: 'History', publish: 1981, 
    edition: 2023 },
];

let userBooks = books.filter( (bk) => bk.genre === "History")

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1990 && bk.genre === "History"
})

console.log(userBooks);
clearInterval