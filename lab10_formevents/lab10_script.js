console.log("Gonzalo Guerra")
// collect the elements

let myform = document.querySelector(".myform")
let username = document.querySelector("#username")
let greeting = document.querySelector(".greeting")
let displayusername = document.querySelector(".display_username")

// collect data within the form after the submit button is pressed
myform.addEventListener("submit", function(event){
    // prevent the default form behavior
    event.preventDefault()

    // collect the data 
    let usernameInput = document.querySelector("#username")
    let usernamevalue = usernameInput.value

    if(usernamevalue.trim() === ""){
        alert("Please a usename")
        return;
    }

    // after the validation passes, the data is sent to server
    // in html, after the validation, the greeting message will display with the user name
    greeting.style.display = "block"
    displayusername.textContent = usernamevalue 

    // clear the username text field
    usernameInput.value = ""

    // submit the form after validation
    myform.submit()
})
let btnsubmit = document.querySelector(".btnsubmit")
window.addEventListener("load", function(){
    btnsubmit.disabled = true

})

let username_error_msg = document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernamevalue = usernameInput.value
    usernamevaluelenght = usernamevalue.length

    if(usernamevaluelenght >= 5 && usernamevaluelenght < 20){
        username_error_msg.textContent = "" 
        btnsubmit.disabled = false
        usernameInput.classList.add("active_input_valid")
  
    }
    else if(usernamevaluelenght === 20){
        username_error_msg.textContent = "username can't be 20+ characters"
        
    }
    else{
        username_error_msg.textContent = "username must be between 5 and 20 characters"
        btnsubmit.disabled = true
        usernameInput.classList.remove("active_input_valid")
        usernameInput.classList.add("active_input_invalid")
    }
})



/* 
 * Oct 21, 2025
 *
 */
// collect the element

const inputpassword = document.querySelector("#password")

// add a focus event to the input
inputpassword.addEventListener("focus", function(){
    inputpassword.classList.add("active_input_valid")
})


// add a blur event to an input
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")

})




// ------ SHUFFLED WORD ------ 
const originalWord = "javascript"

// function to shuffle the original word 
function shuffleWord(word){
    return word
        .split("")
        .sort(()=>Math.random()-0.5)
        .join("")
}


// collect the elements
const scrambleword = document.querySelector("#shuffleword")
const guessInput = document.querySelector("#guessInput")
const wordfeedback = document.querySelector('#wordfeedback')

// show suffled word 
const shuffled = shuffleWord(originalWord)
scrambleword.textContent = shuffled

// add the input event
guessInput.addEventListener("input", function(){
    // collect characters type in the input without begin/end space and lower case 
    const guess = guessInput.value

    if(guess === originalWord){
        wordfeedback.textContent = "Correct!";
        guessInput.classList.add("active_input_valid")

    }
    else{
        wordfeedback.textContent = "Try again";
        guessInput.classList.remove("active_input_valid")
        guessInput.classList.add("active_input_invalid")

    }
})
