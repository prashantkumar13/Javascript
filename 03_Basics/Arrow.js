//this keyword refer to the context where a piece of code, such as a function's body, is supposed to run.
//Most typically, it is used in object methods, where this refers to the object that the method is attached

const user = {
    username : "Prashant",
    price : 100,

    messege : function(){
        console.log(`${this.username} , welcome to site`) // this current context ko refer karta hai object ka
        // console.log(this)
    }
}

// user.messege()
// user.username = "james"
// user.messege()

// console.log(this) //empty object ko refer karta hai
                  // but browser me window object ko refer karta hai



//++++++++++++++++++++++++++++++++++++++++++ important
// function one(){
//     // const username = "pk"
//     console.log(this) //node ke andar this refer kar rha hai
//     // console.log(this.username) //nut this,username function ke andar kaam ni karta hai (undefiend) aata hai output     
// }                  

// one()



//this keyword with arror function

// const check = () => { // arrow function me {} empty object return hota hai
//     console.log(this)
// }

// check()


//++++++++++++++++++++++++++++++++++++++ arror function +++++++++++++++++++++//

const addone = (num) => { //explicit return
    return num + 1
}

console.log(addone(4))


const addNum = (num1 , num2) => ( num1 + num2 ) //implicit return 

console.log(addNum(2,3))

const handleObject = (num1 , num2) => ( {username : "Prashant"} )

console.log(handleObject())