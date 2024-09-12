//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const LoggedIn = false
const temperature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigInt = 23456789876543212345678
console.log(BigInt);




// Refrence type (non primitive)

// Array, Objects, functions 


const heros = ["superman", "ironman", "thor"]

let myObj = {
    name: "swekit",
    age: 23
}

const myfunc = function(){
    console.log("hello worl");
    
}

console.log(typeof myfunc);



