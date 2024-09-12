//stack
let a = "swekit"
let b = a
a = "new world"

console.log(b);

//heap => non primitive , stack => primitive

/*Here's what happens in your code:

let a = "swekit";: The string "swekit" is assigned to the variable a.
let b = a;: The value of a (which is "swekit") is copied into b. Now, b also holds the string "swekit", but it's independent of a.
a = "new world";: The variable a is now assigned a new value "new world". This doesn't affect b, since b holds a copy of the original value "swekit".
console.log(b);: Prints "swekit", because b was assigned the value before a was changed.
In summary, since b was assigned the value of a before a was changed, it retains the original value "swekit".
*/

//heap
const userOne = {
    email : "swekit@google.com",
    dob : 7 
}

const userTwo = userOne

userTwo.email = "rudra@netflix"

console.log(userOne.email);
console.log(userTwo.email);