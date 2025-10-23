
/// lion ////
const lion = ['lion'];

const lion_input = document.querySelector("#lion_input");
const lion_feedback = document.querySelector("#lion_feedback");

lion_input.addEventListener("input", function() {

    const lion_name = lion_input.value;

    if (lion_name === '') {
        lion_feedback.textContent = 'Please enter name';
        lion_input.classList.remove("active_input_valid")
        lion_feedback.classList = 're_enter_username';
        submit_register.disabled = true;
    }
    else if (lion.includes(lion_name)) {
        lion_feedback.textContent = 'That is correct!';
        lion_feedback.classList = 'available';
        lion_input.classList.remove("active_input_invalid")
        lion_input.classList.add("active_input_valid")
        submit_register.disabled = true;
    } 
    else {
        lion_feedback.textContent = 'Wrong name';
        lion_feedback.classList = 'taken';
        lion_input.classList.remove("active_input_valid")
        lion_input.classList.add("active_input_invalid")
        submit_register.disabled = false;
    }
});

/// lion ////



/// horses ////
const horse = ['horse'];

const horse_input = document.querySelector("#horse_input");
const horse_feedback = document.querySelector("#horse_feedback");

horse_input.addEventListener("input", function() {

    const horse_name = horse_input.value;

    if (horse_name === '') {
        horse_feedback.textContent = 'Please enter name';
        horse_input.classList.remove("active_input_valid")
        horse_feedback.classList = 're_enter_username';
        submit_register.disabled = true;
    }
    else if (horse.includes(horse_name)) {
        horse_feedback.textContent = 'That is correct!';
        horse_feedback.classList = 'available';
        horse_input.classList.remove("active_input_invalid")
        horse_input.classList.add("active_input_valid")
        submit_register.disabled = true;
    } 
    else {
        horse_feedback.textContent = 'Wrong name';
        horse_feedback.classList = 'taken';
        horse_input.classList.remove("active_input_valid")
        horse_input.classList.add("active_input_invalid")
        submit_register.disabled = false;
    }
});

/// lion ////