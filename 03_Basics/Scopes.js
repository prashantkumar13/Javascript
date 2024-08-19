// var ik aisa variable hai jo globally access hota hai isliye isko jaida use ni karte
var c = 100
let a = 50
if(true){
    let a = 2
    console.log("inner scope" , a);
    
    const b = 3
    var c = 5
}

// console.log(a); not defined aayega since a is defined in if scope
// console.log(b); not defined aayega since b is defined in if scope
// console.log(c); // ye print ho jayega because it is a global scope variable
// console.log(a);


//nested scope

// function one(){
//     const user = "Prashant"

//     function two(){
//         const app = "mega_share"
//         console.log(user)
//     }

//     // console.log(app) //first error

//     two()//executing 2
// }

// one() // executing one

if(true){
    const user = " james"
    if(user === " james"){
        const app = "youtube"
        console.log(app + user)
    }

    // console.log(app) //first error
}

// console.log(user) //second error


//+++++++++++++++++++++++++++++ important +++++++++++++++++++++++++++
addOne(5)                //
                           //  is type me function uppar call karo to koi dikkt ni hai
function addOne(num){      //
    return num + 1      //
}

// addOne(5)

addTwo(5) //error
const addTwo = function addTwo(num){   //        is tyoe ke expression me agar function call upar kar diye to error aayega
    return num + 2                         //
                                           //
}                                      //

// addTwo(5) // no error




