function getFirstThreeChars(str, n){
    let result = ""
result = str.substring(0, n)
return result
}

console.log(getFirstThreeChars("Codecool", 5))


let testTest = "lorem ipsum dolor et"
console.log(testTest.substring(6, 12))



let splitWord = "Service Quality::3.9|Amenities::3.7|Food and Drinks::3.8|Value for Money::4.1|Location::4.0|"
let splitter = splitWord.split("|")
console.log(splitter)

let randomNumber = Math.round(Math.random() * (100-1)+1)
console.log(randomNumber) 