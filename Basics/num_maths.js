const num = 100
// console.log(num)

const temp = new Number(200) // as object banta hai ye bhi

// console.log(temp)

const next = temp.toString() // number ab string ban gya hai 
// saari string ki properties lag skti hai isme

// console.log(next)
// console.log(typeof next)

// console.log(next.length)

const hundred = 1000000

// console.log(hundred.toLocaleString())

// ++++++++++++++++++++++++++++++++ MAth +++++++++++++++++++++++++++++++++ //

console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.7)); // jo karib hai usme pass jaeyga
// console.log(Math.ceil(4.2)); // maximum me le jayega
// console.log(Math.floor(4.6)) // minimum me le aayega

// console.log(Math.random()); // random value between 0 - 1


console.log((Math.random() * 10) + 1)// 0 na aajaye isliye 1 add karte hai
console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))