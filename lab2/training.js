console.log("Lab 2, Gonzalo Guerra")
console.log("\n------ Example 1: array --------")
// create and initialize an array
let fruits = ["apple", "orange", "grapes", "kiwi", "pineapple"]
console.log(`The 3rd fruit = ${fruits[1]}`)
console.log(`There is/are ${fruits.length} fruits in the list`)

// Remove the 1st element in array fruits using method `shift()`
console.log(`original array ${fruits}`)
fruits.shift()
console.log(`Remove the 1st element in array fruits ${fruits}`)

// add elements to the start(left) of the array
fruits.unshift(25,"mango", true)
console.log(`Updated array with three new elements = ${fruits}`)

// add elements to the end(right) of the array
fruits.push("PETER", 100)
console.log(`Updated array with two new elements to the right = ${fruits}`)

// find the index of an element 
let index_blueberries = fruits.indexOf("blueberries")
console.log(`What is the index of 'blueberries' ${index_blueberries}`)

// if the return index is -1, the element does not exist in the array 
let index_PETER = fruits.indexOf("PETER")
console.log(`What is the index of 'PETER' ${index_PETER}`)

console.log("\n------ Example 2: if statement --------")
// if statement is used to check if the condition statement is TRUE,
//If it is true, then the program will run the lines in between the curly braces

let day = true
let night = false

// check if it is day time


if (day) {
    console.log("Good morning!")
    
}
else {
    console.log("Good night!")
}

console.log("END")

let n1 = 10     // numerical data type
let n2 = "10"   // string data type

console.log("\n------ Example 3: if statement with logical operators --------")
// check if n1 is equal to n2
if (n1 == n2) {
    console.log(`n1 is equal to n2 --> ${n1==n2}`)
}

console.log("END 2")

// check if n1 is EXACTLY equal to n2 
if (n1 === n2)  {
    console.log(`n1 is EXACTLY to n2 --> ${(n1===n2)}`)
}

/*else {
    console.log(`n1 is NOT EXACTLY equal to n2 --> ${(n1===n2)}`)
}*/


// check if n1 is NOT equal to n2
/*if (n1 != n2) {
    console.log(`n1 is NOT equal to n2 --> ${n1!=n2}`)
}*/



console.log("END 3")

console.log("\n------ Example 4: check if a number is even or odd --------")
// if-else check two conditions

let number = 7
if (number % 2 == 0) {
    console.log(`${number} is an EVEN`)
}
else {
    console.log(`${number} is an ODD`)
}

console.log("\n------ Example 5: check if an input is a string or a number --------")
let user_input = prompt("Enter a username")
let check_username = isNaN(parseFloat(user_input))

console.log(`${user_input} is not a number? ${check_username}`)

if(check_username) {
    console.log(`${user_input} is a STRING`)

}
else {
    console.log(`${user_input} is a NUMBER`)
}

console.log("\n------ Example 6: multiway conditional statement --------")
let num1 = 9
let num2 = 20

if (num1 === num2) {
    console.log(`num1 is EXACTLY EQUAL to num 2`)
} 
else if (num1 > num2) {
    console.log(`num1 is GREATER than num2`)
}
else if (num1 < num2) {
    console.log(`num1 is LESS than num2`)
}
else {
    console.log(`ERROE: unable to compare`)
}

console.log("\n------ Example 7: switch statement--------")

let gender = prompt("Enter a gender")

switch(gender) {
    case "Female": case "FEMALE": case "F": case "f": case "female":
        console.log("Selected gender = FEMALE")
        break
    case "Male": case "MALE": case "M": case "m": 
        console.log("Selecteed gender = MALE")
        break
    case "Other": case "OTHER": case "other": case "o": case "O": 
        console.log("Selected gender - OTHER")
        break
    default:
        console.log("ERROR: unable to read the selected gender")
}






console.log("\n------ Exercise 1--------")

/*user_input = prompt("Enter a username")    // class 
check_username = isNaN(parseFloat(user_input))

if(check_username) {
    console.log(`${user_input} is a STRING`)

}
else {
    console.log(`${user_input} is a NUMBER`)

    if // check if the number is positive

    else if // check if the number is negative

    else if // check if the number is zero

    else // error
}*/
    
let decide = prompt("Enter a number") // mine  need to fix this 

if(number < 0){
    console.log(`${decide} is a POSITIVE number`)
}
else if(number > 0){
    console.log(`${decide} is a NEGATIVE number`)
}
else if(number == 0){
    console.log(`${decide} is ZERO`)
}
else {
    console.log("ERROR: unable to read the input")
}



console.log("\n------ Exercise 2 --------") // mine
let colors = prompt("Enter a color")
switch(colors) {
    case "Red": case "RED": case "red": case "r": case "R":
        console.log("You selected RED color")
        break
    case "Blue": case "BLUE": case "blue": case "b": case "B":
        console.log("You selected BLUE color")
        break
    case "Green": case "GREEN": case "green": case "g": case "G":
        console.log("You selected GREEN color")
        break
    case "Yellow": case "YELLOW": case "yellow": case "y": case "Y":
        console.log("You selected YELLOW color")
        break
    default:
        console.log("ERROR: unable to read the selected color")
}











console.log("\n------ Exercise 2 --------")
let colorss = ["red", "green", "Orange", "olive", "magenta"] 
let user_color = prompt("Enter a color")

// use lower method to change everything to lower case

// use indexof method to check if the user_color exists in the array colorss

// switch to print the result 



// please choose any number bet ween 0 to 4 // other method haha... 

let user_choice = prompt("Enter a number between 0 to 4") 

if(user_choice == 0){
    console.log(`You selected ${colorss[0]}`)
}
else if(user_choice == 1){
    console.log(`You selected ${colorss[1]}`)
} 
else if(user_choice == 2){
    console.log(`You selected ${colorss[2]}`)
} 
else if(user_choice == 3){
    console.log(`You selected ${colorss[3]}`)
}
else if(user_choice == 4){
    console.log(`You selected ${colorss[4]}`)
}
else {
    console.log("ERROR: unable to read the input")
}