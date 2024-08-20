// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march" // case ko bas key ke data type se match karna hai

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb"); //break lagana important hai agar kisi case me break ni lagaye to uske saare niche ke code execute ho jayenge
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}