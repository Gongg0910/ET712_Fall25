let registration = document.querySelector("#registration")

registration.addEventListener('submit', function(event) {

    // prevent default submission to let user fill out before submitted
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    let validating = true;

    // name if empty then error or not 
    if (name.trim() === '') {
        alert('Name is empty, please try again'); 
        validating = false;
    }

    // email require with @gmail.com
    const email_address = /@/;
    if (email.trim() === '') {
        alert('Email must not be empty.');
        validating = false;

    }  // I think using .test() and !      that seem easier than naming so many variables I think 
    else if (!email_address.test(email)) {
        alert('Email must follow a valid format, such as (name@example.com)');
        validating = false;
    }

    // password must require with #, @, $, or %
    const password_punctuations = /[# $ % @]/;
    if (password.trim() === '') {
        alert('There is nothing in password, please try again.');
        validating = false;
    } 
    else if (!password_punctuations.test(password)) {
        alert('Password must have at least 5 character and contain one of #, @, $, or %.');
        validating = false;
    }

    // If all three of them are valid then send greeting
    /* if (validating) {
        alert(`Welcome back! ${name}!`);
    } */
   if(validating){
    registration.submit()
   }
   
});

/* Prevent user from going back */
function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {null};


