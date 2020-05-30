// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// create a function that takes in a string as an argument
// split the string into an array
// check to see if the string array has any of the vowels
// if they do include a vowel replace it with the corresponding number

const codeWordifier = (str) => {
    let newArr = str.toLowerCase().split('')
    return newArr.map((value) => {
        if(value === "a") {
            return value = 4
        } else if(value === "e") {
            return value = 3
        } else if(value === "i") {
            return value = 1
        } else if(value === "o") {
            return value = 0
        } else {
            return value
        }
    }).join('')
}


console.log(codeWordifier(secretCodeWord1));
console.log(codeWordifier(secretCodeWord2));



// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// create a function that takes in an array as an argument
// use the filter method to filter out the ones that don't have the letter "A"
// inside the fitler function make the value all lowercase to make sure it doesn't miss an uppercase A

const letterA = (arr) => {
    return arr.filter((value) => {
        let lowered = value.toLowerCase()
        if(lowered.includes("a") === true ) {
            return value
        }
    })
}

console.log(letterA(arrayOfWords));




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

var hand4 = [100,1000,100,1000,1000]
// Expected output: true


//create a function that takes in an array as an argument
// map through the function to check for matching numbers
// push matching numbers into own array and count the length of the array to see if it matches the requirements for a full house

const fullHouse = (arr) => {
    let sortedNums = arr.sort((a,b) => a - b)
    let firstMatch = []
    let secondMatch = []
     arr.map(value => {
        if(value === sortedNums[1]) {
            firstMatch.push(value)
        } else if( value === sortedNums[sortedNums.length - 1]) {
            secondMatch.push(value)
        }
    })

    if(firstMatch.length === 2 && secondMatch.length === 3 || firstMatch.length === 3 && secondMatch.length === 2){
        return true
    } else {
        return false
    }
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
console.log(fullHouse(hand4));
