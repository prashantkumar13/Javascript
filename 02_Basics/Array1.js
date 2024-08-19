//definiting array
// koi bhi data type use kar sakte hai ik hi array me
// 0 indexing hot hai
const myArr = [0 , 1 , 2 , 3 , 4, 5]

// console.log(myArr)

// console.log(myArr[3])

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(3))

// console.log(myArr.find((Element) => Element > 2)) // condition ke hisab se value deta hai iterate karke

// myArr.push(6)
// myArr.pop()
// console.log(myArr)

//shift and unshift

// myArr.unshift(6) // saame me add karta hai
// console.log(myArr)

// myArr.shift() // aur ye saame se uda deta hai
// console.log(myArr)

//+++++++++++++++++ slice and splice ++++++++++++//

// console.log("A" , myArr)

// const newArr1 = myArr.slice(1,3) // original array me change ni hota hai upperbound bina use karke
// console.log(newArr1)
// console.log("B" , myArr)

// const newArr2 = myArr.splice(1,3)// original me ye part cut kar leta hai upperbound include karke
// console.log(newArr2)
// console.log("c" , myArr)


const newArr3 = myArr.join(); // ye join kar deta hai saare elements ko as string form me
console.log(newArr3); 