let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let mynewDate = new Date(2024, 5, 5, 18, 34, 30)
console.log(mynewDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-02-2023") //dd-mm-yy
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} is todays's date`

newDate.toLocaleString('default', {
    weekday: "long",
    
})