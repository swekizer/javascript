const score = 100
console.log(score);

const balance = new Number(200.845)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

console.log(balance.toPrecision(3));


const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));



//********************** Maths ************************//

console.log(Math.abs(-4));
console.log(Math.round(5.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4,6,5,3));
console.log(Math.min(4,6,5,3));

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1) + min));


