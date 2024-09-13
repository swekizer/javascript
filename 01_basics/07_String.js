const name = "swekit"
const age = 19

console.log(name +  " " + "and" + "age is" + " " + age);

//or

console.log(`My name is ${name} and my age is ${age}`);

const name1 = new String ('Rudra-hello')

console.log(name1);

console.log(name1[0]);

//String Methods
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.__proto__);

console.log(name1.charAt(2));
console.log(name1.indexOf('r'));

const newString = name1.substring(0,4)
console.log(newString);

const newString1 = name1.slice(-4,4)
console.log(newString1);

const newString2 = "    Swekit    "
console.log(newString2);
console.log(newString2.trim());

const url = "https://www.google.com/leetcode%20swekizer"
console.log(url.replace('%20', '-'));

console.log(url.includes('google'));
console.log(url.includes('swekit'));

console.log(name1.split('-'));

console.log();








