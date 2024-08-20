//for of loop

const array = [1,2,3,4,5]

// for (const num of array) {
//     // console.log(num)
// }

// const name = "Prashant kumar"

// for (const curr of name) {
//     console.log(`current character is ${curr}`)
// }

//MAP

const map = new Map() //map bhi ik object hai jo key value ko store karta hai (unique) aur order maintain karta hai
map.set('IN' , 'INDIA')
map.set('FR' , 'France')
map.set('UK' , 'united kingdom')
map.set('IN' , 'INDIA')

// console.log(map)

// for (const key of map) { array banake key value deta hai har entry ki
//     console.log(key)
// }

for (const [key , value] of map) {
    // console.log(`key is ${key} and value is ${value}`)
    console.log(key , value)
}


//object and for of loop ki kahani

const myObject = {
    game1 : "NFS",
    game2 : "GTA"
}

for (const [key , value] of myObject) { //objects are not iterable in for of loop
    console.log(key , value)
}