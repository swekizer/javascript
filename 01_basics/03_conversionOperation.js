//Number
console.log("Number");
let score = "33"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof(valueInNumber));

//String
console.log("String");
let score1 = "33abc"
console.log(typeof score1);
let valueInNumber1 = Number(score1)
console.log(valueInNumber1);
console.log(typeof(valueInNumber1));

//Undefined
console.log("undefined");
let score2 = undefined
console.log(typeof score2);
let valueInNumber2 = Number(score2)
console.log(valueInNumber2);
console.log(typeof(valueInNumber2));


// "33" => 33
// "33abc" => NaN
// "true" => 1; "false =>0


let isLoggedIn =1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 2 => false
// "" => false
// "swekit" => true


let someNumber = 33

let stringnumber = String(someNumber)
console.log(stringnumber);
console.log(typeof stringnumber);

