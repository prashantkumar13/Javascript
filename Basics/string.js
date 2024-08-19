const name = "Prashant"
const addCount = 50

// console.log(name + addCount); // old method of concatenation

// console.log(`my name is ${name} and my count is ${addCount}`) // new method of concatenation 

const game = new String('James'); // as object bana hai string har char ki key hogi

// console.log(game)

console.log(game[0]);
console.log(game.__proto__) // object
console.log(game.length) //lenght() ye ni chalega since lenght is not a function

console.log(game.charAt(3))
console.log(game.indexOf('m'));
console.log(game.toUpperCase());

const newString = game.substring(0,3);
console.log(newString);


console.log(game.slice(-5, 2)); //negative index bhi de skte hai

const anotherString = "   James   "
console.log(anotherString);

console.log(anotherString.trim())

const url = "https//prashantjames765/prashant%34james"

console.log(url.replace('%34' , '-'));




