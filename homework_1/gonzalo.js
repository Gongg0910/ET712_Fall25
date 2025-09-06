/*
Homework 1: control flow and loops
Student’s name: Gonzalo Guerra
*/

console.log("\n------ Program 1: conditional statement -----")

for (let attempt = 0; attempt < 5; attempt++) {
    let user = prompt("Enter any number: ")
    let message;
    if(user === null){
        message = "Null and void!";
    }
    else if(user.trim() === ""){
        message = "Your answer was blank!";
    }
    else{
        let number = parseFloat(user);
        if(number > 0){
            message = "Think positively!"
        }
        else if(number < 0){
            message = "Never have negative balance!"
        }
        else if(number === 0){
            message = "Ying and Yang!"
        }
    }
    console.log(message)
}




// let user = prompt("Enter any number: ")   /////// Non loop ///////
// let message;

// if(user === null){
//     message = "Null and void!";
// }
// else if(user.trim() === ""){
//     message = "Your answer was blank!";
// }
// else{
//     let number = parseFloat(user)
//     if(number > 0){
//         message = "Think positively!";
//     }
//     else if(number < 0){
//         message = "Never have negative balance!";
//     }
//     else if(number === 0){
//         message = "Ying and Yang!";
//     }
// }
// console.log(message)





console.log("\n------ Program 2: for loop and nested conditional statement -----")

let collect_numbers = [];
const seek = 10;

for(let i = 0; i < seek; i++){
    do {
        string_input = prompt(`Please enter number between ${i + 1} to ${seek}`);
        number_input = parseFloat(string_input);
        if (string_input === null){
            alert("You clicked cancel to quit");
            i = seek;
            break;
        }
        if (isNaN(number_input)){
            alert("Invalid number try again")
        }
    }
    while(isNaN(number_input))
        if (number_input !== null){
            collect_numbers.push(number_input)
        }
}

console.log("Collected numbers:", collect_numbers); 

let numbers = [3, 5, 7];

for(let i = 0; i < numbers.length; i++ ){
    let multiply = numbers[i];
    console.log(`\nNumber multiplies of ${multiply}`)
    for(let r = 0; r < collect_numbers.length; r++){
        console.log(collect_numbers[r] * multiply)
    }
}

// let three = collect_numbers.map(element => element * multiply[0])   ////// NON loop ///// 
// let five  = collect_numbers.map(element => element * multiply[1])
// let seven = collect_numbers.map(element => element * multiply[2])

// console.log(`${three}      numbers are multiples of ${multiply[0]}`)
// console.log(`${five}    numbers are multiples of ${multiply[1]}`)
// console.log(`${seven}    numbers are multiples of ${multiply[2]}`)