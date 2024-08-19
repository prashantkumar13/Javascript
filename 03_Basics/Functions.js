//define a function
// it increases the reusibility
function myName(){
    console.log("j")
    console.log("a")
    console.log("m")
    console.log("e")
    console.log("s")
}

//execute
// myName()
// myName()
// myName()
// myName()

//function with para meters

function addNumber(num1 , num2){
    console.log(num1 + num2)
}

// addNumber() // output NaN jab koi arguments ni bhej ho

// addNumber(2,3)

// const result = addNumber(2,3)
// console.log(result) //output undifiend because the function doest not return the value it just print the value



//funtion with return 
function addNumber(num1 , num2){
    let result = num1 + num2
    return result
}
const result = addNumber(2,4)
console.log(result)



//function with bebticks
function profile(username){

    if(!username){
        console.log("please enter the username first")
        return
    }
    return `${username} just logged in` 
}

console.log(profile()) //if we not send any argument then output in UNDIFIEND
console.log(profile("Prashant"))


//function with rest or spread operator
function appCart(...num){
    return num
}

// console.log(appCart(23, 12, 25)) // just first value is output (num)
console.log(appCart(23, 12, 25)) //array with all elements(...num)



//function with object
const bookList = {
    id : 2,
    price : 100
}

function handleObject(anyBook){
    return `the book id number is ${anyBook.id} and the price is ${anyBook.price}`
}

console.log(handleObject(bookList))



//function with array
// const newArray = [1,2,3]

function handleArray(anyArray){
    return `the first index contain ${anyArray[1]}`
}

console.log(handleArray([1,2,3]))
console.log(handleArray(newArray))
