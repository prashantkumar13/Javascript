let myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())

console.log(typeof myDate);

console.log(Date.now()) // mini second me aayega  1st jan 1970 se


// let myCreatedDate = new Date(2024 , 3 , 14)
let myCreatedDate = new Date(2024 , 3 , 13  , 5 , 30)

// let myCreatedDate = new Date("01-14-23")

// console.log(myCreatedDate.toLocaleString())

console.log(myCreatedDate.getTime()) // ye bhi mili second me time dega 1st jan 1970 se jo date daale honge waha tak ka

console.log(Math.floor(Date.now() / 1000)) // seconds me aa jayega 