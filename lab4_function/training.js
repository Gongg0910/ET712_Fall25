/* 
Gonzalo Guerra
lab 4, functions
sep 9, 2025 
*/

console.log("Gonzalo Guerra");
// define a function to print a message
function msg() {
    console.log("----- Example 1 -----");
    console.log("Hello World!");
}

// define a function to print from 3 to 1 
function printCount(){
    console.log("----- Example 2 -----");
    for(let n = 3; n > 0; n--){
        console.log(n);
    }
}

//define a function that passed a username
function greeting(username){
    console.log("----- Example 3 -----");
    console.log(`Welcome to JS ${username}`);
}



// define a function passes a message and print it in uppercase
function upperMessage(message){
    console.log("----- Example 4 -----");
    let changeUpper = message.toUpperCase();
    console.log(changeUpper);
}

// define a function to simulate a snake eyes game.
// pass two numbers to the function, and check if both number are '1'
function isSnakeEyes(dice1, dice2){
    console.log("----- Example 5 -----");
    if(dice1 === 1 && dice2 === 1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Not Snake Eyes!")
    }
}

// define a function that return the area of a rectangle
function areaRectangle(lenght, width){
    console.log("----- Example 6 -----");
    return lenght * width;
}

// define a function to check a temperature. If the temperature is greater than 75, returns 'true', otherise, it return a 'false'
function checkTemperature(temperature){
    if(temperature >= 75){
        console.log("The temperature is TOO HOT ASD aDDSAfasd");
        return true
        
    }
    else if(temperature >= 50){
        console.log("The temperature is ok");
    }
    else {
        console.log("The temperature is too cold!")
        return false
    }
}


// lab 4, introduction to function, Gonzalo Guerra  ////// HOMEWORK //////
const attempt = 5;
function checkName() {
  for (let i = 0; i < attempt; i++) {
    let enter_name = prompt("Enter your name:");

    if (enter_name === 'Gonzalo' || enter_name === 'gonzalo') {
      console.log(`Welcome ${enter_name.toUpperCase()} to the class!`);
      break; 
    } 
    else if (enter_name === null) {  // if user cancel
      alert("You forgot to enter a name. Enter a name again."); 
    } 
    else if (enter_name !== null && enter_name.trim() === '') {  // if user enter blank
      alert("You entered an empty name. Please enter a name."); 
    } 
    else if (!isNaN(enter_name)) {  // if user enter number
      alert(`${enter_name} is invalid! Enter a name again`); 
    } 
    else {   // if user enter wrong name or different words. 
      alert(`${enter_name} is an invalid name. Enter a name again.`); 
    }
  }
}





///// This is other method without using for loop //////
/* function capitalize(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return ''; 
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function checkName(name){
    if(name == 'Gonzalo' || name == 'gonzalo' || name == 'GONZALO'){
        const my_name = capitalize(name);
        alert(`Welcome ${my_name} to the class!`)
    }
    else if(name == '' || name == ' '){
        alert("You forgot to enter a name. Enter a name again:")
    }
    else {
        alert(`${name} is invalid! Enter a name again:`)
    }
} */