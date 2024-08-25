// const promiseOne = new Promise( function(resolve , reject) {

//     setTimeout( function(){
//         console.log("Asyn function excuted")
//     } , 1000)
// })


// promiseOne.then( function(){
//     console.log("promise executed")
// }) //jab tak resolve call ni karenge  tab tak promise execute ni hoga


// resolve karna imp hai then ko add karne ke liye
// const promiseOne = new Promise( function(resolve , reject) {

//     setTimeout( function(){
//         console.log("Asyn function excuted")
//         resolve()
//     } , 1000)
// })


// promiseOne.then( function(){
//     console.log("promise executed")
// })


//method 2 to initialise

new Promise( function(resolve , reject){
    setTimeout( () => { console.log("asyn task 2")
        resolve()
    } , 1000)                    // it is used to indicate that the asynchronous operation has completed successfully                    
}).then( () => {                  //and to pass the result to the promise's handlers.
    console.log("promise executed")
})