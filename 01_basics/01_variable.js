const accountId = 14453
let accountEmail = "swekit0000@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedadbad"

let accountState;

//accountId =2; //not allowed

accountEmail = "hc@hc.com"
accountPassword = "34"
accountCity = "Jaipur"



console.log(accountId);

/*
Prefer not to use var because if issue in block scope and functional scope

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])