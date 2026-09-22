//Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution se problem hoti hai kai baar, to jo global scope ke pollution ya variable hai use hatane ke liye iife ka use hota hai.

(function chai (){            //Named iife
    console.log(`DB CONNECTED`);    
})();


// chai()

// () ()--- (first parent). function ki defination likhte hai, (second paranthsis) execution Callback.

( function aurcode() {
        console.log(`DB CONNECTED TWO`);
}) ();


( () => {
        console.log(`DB CONNECTED THREE`);
}) ();


( (name) => {                   //unnamed iife
        console.log(`DB CONNECTED Four`);
}) ("Shivam")