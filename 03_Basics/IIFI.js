//Immediately Invoked Function Expressions

//global scope ke polution se problem hoti hai kyi barr usko hatane ke liye IIFI use karte hai
//jo function immediately execute ho jaye

(function one(){ //named IIFI
    console.log(`Connected`)
})(); // semi colon important hai agle program ko run karane ke liye


( (name) => { // simple IIFI
    console.log(`Connected two ${name}`)
})("Prashant");