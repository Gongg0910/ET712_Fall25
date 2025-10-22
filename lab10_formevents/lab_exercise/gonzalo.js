const takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

const usernameInput = document.querySelector("#usernameInput");
const feedback = document.querySelector("#feedback");
const submit_register = document.querySelector("#submit_register");
const registration_form = document.querySelector("#registration_form");

usernameInput.addEventListener("input", function() {

    const username = usernameInput.value;

    if (username === '') {
        feedback.textContent = 'Please enter your username';
        usernameInput.classList.remove("active_input_valid")
        feedback.classList = 're_enter_username';
        submit_register.disabled = true;
    }
    else if (takenUsernames.includes(username)) {
        feedback.textContent = 'Username is taken.';
        feedback.classList = 'taken';
        usernameInput.classList.remove("active_input_valid")
        usernameInput.classList.add("active_input_invalid")
        submit_register.disabled = true;
    } 
    else {
        feedback.textContent = 'Username is available!';
        feedback.classList = 'available';
        usernameInput.classList.remove("active_input_invalid")
        usernameInput.classList.add("active_input_valid")
        submit_register.disabled = false;
    }
});

registration_form.addEventListener("submit", function() {
    const username = usernameInput.value;
    if (username === '') {
        submit_register.disabled = true;
    }
    else {
        alert('Registration is successful!');
    }
});