//to define an object
//singleton

// Object.create()

//objects literals

// const myUser = {
//     name : "Prashant",   // internally keys saare string ke form me save hote hai
//     age : 20,
//     "full name" : "Prashant kamar", // her key in the form of key itself we cannot access it by (.)
//     location : "chhattisgarh",
//     email : "prashant@goole.com",
//     isLoggedIn : false
// }


//to access object
// console.log(myUser.name); //one method
// console.log(myUser[name]); // second method

//if the key is written in the form of string then we cannot access the key with (.)
//solution

// console.log(myUser["full name"])

//for the symbol also we access symbol as a string , but we wanted type of a symbol to be symbol only
//therefore the key should be [symbol name] and for access we use [].

const mySmb = Symbol("key1");

// const myUser = {
//     name : "Prashant",   // internally keys saare string ke form me save hote hai
//     age : 20,
//     mySmb : "my key1",
//     "full name" : "Prashant kamar", // her key in the form of key itself we cannot access it by (.)
//     location : "chhattisgarh",
//     email : "prashant@goole.com",
//     isLoggedIn : false
// }

// console.log(mySmb) // symbol(key1) output

// console.log(typeof myUser.mySmb) // string ban gya hai 

//corrected

const myUser = {
    name : "Prashant",   // internally keys saare string ke form me save hote hai
    age : 20,
    [mySmb] : "my key1", //now this will treat as symbol
    "full name" : "Prashant kamar", // her key in the form of key itself we cannot access it by (.)
    location : "chhattisgarh",
    email : "prashant@goole.com",
    isLoggedIn : false
}

// console.log(myUser)

//+++++++++++ to frezze the object+++++++++/

// myUser.email = "rocky123@gmail.com"
// console.log(myUser)
// Object.freeze(myUser) // freeze ke baad change ni hoga
// myUser.email = "sonu123@gmail.com"
// console.log(myUser)


//++++++++++++++++++++++ to merge 2 object ++++++++++++++++++//

const app1 = {1 : "a" , 2 : "b"}
const app2 = {3 : "c" , 4 : "d"}

const app3 = Object.assign({} , app1 , app2) //one method
console.log(app3)

const app4 = {...app1 , ...app2} // spread operator
console.log(app4)

// console.log(Object.keys(app3)) // array ke form me return hoga
// console.log(Object.values(app3)) //array ke form me return hoga
// console.log(Object.entries(app3)) //array to array ke form me return hoga

// +++++++++++++++++++++++++++ Object de-structure ++++++++++++++++++++++++++//

const course = {
    courseName : "bachalors",
    price : 999,
    cousreInstructor : "Prashant"
}

//destructure
const {cousreInstructor} = course

console.log(cousreInstructor);

//hum apna nam bhi de skte hai naya destructure me
const {cousreInstructor : instructor} = course // name here instructor

console.log(instructor)
console.log(cousreInstructor); // both have same output
