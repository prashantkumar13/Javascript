// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (items) => {
//     console.log(items)
//     return items
// } )

// console.log(value) // value return ni kar rha hai forEach loop


//filter



const value = [1,2,3,4,5]

// const number = value.filter( (num) => num > 2 ) //ye bhi ik call back func ko return karta hai based in condition

// const number = value.filter( (num) => {
//     num > 2                              // agar { } use kiye hai to return keyword jaruri hai nhi to [] array output me aayega
// } )

// const number = value.filter( (num) => {
//     return num > 2
// } )

// console.log(number) 



//for forEach loop

// const newNums = []

// value.forEach( (num) => { //ye method hai for each se return karvane ka
//     if (num > 2) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 2005 && bk.genre === "Science"
})
  console.log(userBooks);

