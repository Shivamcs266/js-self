const accountId = 112233
let accountEmail = "shivametw266@gmail.com"
var accountPaasword = "12345"
accountCity ="Delhi"    /*we can also assign variable like this but this is not a good pratice.*/
let accountState;

// accountId = 2 // not allowed

accountEmail = "shiv@gmail.com"
accountPaasword = "22222"
accountCity = "Jaipur"

console.log(accountId);

/*
    Prefer not to use var 
    Because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPaasword, accountCity, accountState]);    