// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    //console.log(element);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    //console.log(greet);
    
}

// Maps  "It's hold the unique value, the duplicate value is not store here." 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

console.log(map);


for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject = {          // the object is not iterable in this "for-of loop", it is use for Map.
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}