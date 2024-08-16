// stack (copy value jati hai)

let myYoutubeName = "Prashant kumar"
let anotherName = " myYoutubeName"

anotherName = "james"

console.log(myYoutubeName);

console.log(anotherName);


//heap (reference value jati hai)

let userone = {
    email : "pk@gamil.com",
    upi : "yono@24"

}

let usertwo = userone

usertwo.email = "yo@gmail.com"

console.log(userone.email);
console.log(usertwo.email);