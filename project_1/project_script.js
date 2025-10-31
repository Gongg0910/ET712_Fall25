// onst animals_list = ['lion', 'horse', 'dog', 'cat', 'bird', 'bear', 'rabbit', 'fish'];
// I tried to use thie method but if I type lion in below horse image it would be correct // 

/// lion ////
const lion_array = ['lion', 'Lion'];
const lion_input = document.querySelector("#lion_input");
const lion_feedback = document.querySelector("#lion_feedback");

lion_input.addEventListener("input", function() {

    const lion_name = lion_input.value;

    if (lion_name === '') {
        lion_feedback.textContent = 'Please enter the name of animal';
        lion_input.classList.remove("active_input_valid")
        lion_feedback.classList = 're_enter_username';
    }
    else if (lion_array.includes(lion_name)) {
        lion_feedback.textContent = 'That is correct!';
        lion_feedback.classList = 'available';
        lion_input.classList.remove("active_input_invalid")
        lion_input.classList.add("active_input_valid")
    } 
    else {
        lion_feedback.textContent = 'Wrong name';
        lion_feedback.classList = 'taken';
        lion_input.classList.remove("active_input_valid")
        lion_input.classList.add("active_input_invalid")
    }
});
/// lion ////

/// horses ////
const horse_array = ['horse', 'Horse'];
const horse_input = document.querySelector("#horse_input");
const horse_feedback = document.querySelector("#horse_feedback");

horse_input.addEventListener("input", function() {

    const horse_name = horse_input.value;

    if (horse_name === '') {
        horse_feedback.textContent = 'Please enter the name of animal';
        horse_input.classList.remove("active_input_valid")
        horse_feedback.classList = 're_enter_username';
    }
    else if (horse_array.includes(horse_name)) {
        horse_feedback.textContent = 'That is correct!';
        horse_feedback.classList = 'available';
        horse_input.classList.remove("active_input_invalid")
        horse_input.classList.add("active_input_valid")
    } 
    else {
        horse_feedback.textContent = 'Wrong name';
        horse_feedback.classList = 'taken';
        horse_input.classList.remove("active_input_valid")
        horse_input.classList.add("active_input_invalid")
    }
});
/// horse ////

/// dog ////
const dog_array = ['dog', 'Dog'];
const dog_input = document.querySelector("#dog_input");
const dog_feedback = document.querySelector("#dog_feedback");

dog_input.addEventListener("input", function() {

    const dog_name = dog_input.value;

    if (dog_name === '') {
        dog_feedback.textContent = 'Please enter the name of animal';
        dog_input.classList.remove("active_input_valid")
        dog_feedback.classList = 're_enter_username';
    }
    else if (dog_array.includes(dog_name)) {
        dog_feedback.textContent = 'That is correct!';
        dog_feedback.classList = 'available';
        dog_input.classList.remove("active_input_invalid")
        dog_input.classList.add("active_input_valid")
    } 
    else {
        dog_feedback.textContent = 'Wrong name';
        dog_feedback.classList = 'taken';
        dog_input.classList.remove("active_input_valid")
        dog_input.classList.add("active_input_invalid")
    }
});
/// dog ////


/// cat ////
const cat_array = ['cat', 'Cat'];
const cat_input = document.querySelector("#cat_input");
const cat_feedback = document.querySelector("#cat_feedback");

cat_input.addEventListener("input", function() {

    const cat_name = cat_input.value;

    if (cat_name === '') {
        cat_feedback.textContent = 'Please enter the name of animal';
        cat_input.classList.remove("active_input_valid")
        cat_feedback.classList = 're_enter_username';
    }
    else if (cat_array.includes(cat_name)) {
        cat_feedback.textContent = 'That is correct!';
        cat_feedback.classList = 'available';
        cat_input.classList.remove("active_input_invalid")
        cat_input.classList.add("active_input_valid")
    } 
    else {
        cat_feedback.textContent = 'Wrong name';
        cat_feedback.classList = 'taken';
        cat_input.classList.remove("active_input_valid")
        cat_input.classList.add("active_input_invalid")
    }
});
/// cat ////


/// bird ////
const bird_array = ['bird', 'Bird'];
const bird_input = document.querySelector("#bird_input");
const bird_feedback = document.querySelector("#bird_feedback");

bird_input.addEventListener("input", function() {

    const bird_name = bird_input.value;

    if (bird_name === '') {
        bird_feedback.textContent = 'Please enter the name of animal';
        bird_input.classList.remove("active_input_valid")
        bird_feedback.classList = 're_enter_username';
    }
    else if (bird_array.includes(bird_name)) {
        bird_feedback.textContent = 'That is correct!';
        bird_feedback.classList = 'available';
        bird_input.classList.remove("active_input_invalid")
        bird_input.classList.add("active_input_valid")
    } 
    else {
        bird_feedback.textContent = 'Wrong name';
        bird_feedback.classList = 'taken';
        bird_input.classList.remove("active_input_valid")
        bird_input.classList.add("active_input_invalid")
    }
});
/// bird ////


/// bear ////
const bear_array = ['bear', 'Bear'];
const bear_input = document.querySelector("#bear_input");
const bear_feedback = document.querySelector("#bear_feedback");

bear_input.addEventListener("input", function() {

    const bear_name = bear_input.value;

    if (bear_name === '') {
        bear_feedback.textContent = 'Please enter the name of animal';
        bear_input.classList.remove("active_input_valid")
        bear_feedback.classList = 're_enter_username';
    }
    else if (bear_array.includes(bear_name)) {
        bear_feedback.textContent = 'That is correct!';
        bear_feedback.classList = 'available';
        bear_input.classList.remove("active_input_invalid")
        bear_input.classList.add("active_input_valid")
    } 
    else {
        bear_feedback.textContent = 'Wrong name';
        bear_feedback.classList = 'taken';
        bear_input.classList.remove("active_input_valid")
        bear_input.classList.add("active_input_invalid")
    }
});
/// bear ////


/// rabbit ////
const rabbit_array = ['rabbit', 'Rabbit'];
const rabbit_input = document.querySelector("#rabbit_input");
const rabbit_feedback = document.querySelector("#rabbit_feedback");

rabbit_input.addEventListener("input", function() {

    const rabbit_name = rabbit_input.value;

    if (rabbit_name === '') {
        rabbit_feedback.textContent = 'Please enter the name of animal';
        rabbit_input.classList.remove("active_input_valid")
        rabbit_feedback.classList = 're_enter_username';
    }
    else if (rabbit_array.includes(rabbit_name)) {
        rabbit_feedback.textContent = 'That is correct!';
        rabbit_feedback.classList = 'available';
        rabbit_input.classList.remove("active_input_invalid")
        rabbit_input.classList.add("active_input_valid")
    } 
    else {
        rabbit_feedback.textContent = 'Wrong name';
        rabbit_feedback.classList = 'taken';
        rabbit_input.classList.remove("active_input_valid")
        rabbit_input.classList.add("active_input_invalid")
    }
});
/// rabbit ////


/// fish ////
const fish_array = ['fish', 'Fish'];
const fish_input = document.querySelector("#fish_input");
const fish_feedback = document.querySelector("#fish_feedback");

fish_input.addEventListener("input", function() {

    const fish_name = fish_input.value;

    if (fish_name === '') {
        fish_feedback.textContent = 'Please enter the name of animal';
        fish_input.classList.remove("active_input_valid")
        fish_feedback.classList = 're_enter_username';
    }
    else if (fish_array.includes(fish_name)) {
        fish_feedback.textContent = 'That is correct!';
        fish_feedback.classList = 'available';
        fish_input.classList.remove("active_input_invalid")
        fish_input.classList.add("active_input_valid")
    } 
    else {
        fish_feedback.textContent = 'Wrong name';
        fish_feedback.classList = 'taken';
        fish_input.classList.remove("active_input_valid")
        fish_input.classList.add("active_input_invalid")
    }
});
/// fish ////


// mouse events to spawn ants
let ant_colony = document.querySelector(".ant_colony")
let spawning_ants = document.querySelector(".spawning_ants")
ant_colony.onmouseover = function(){
    //circle_paragraph.textContent += "- CIRCLE -"
    spawning_ants.innerHTML += '<img src="images/ants.gif" class="aaa">';
}
// mouse events to spawn ants



/* Photographer take picture of animals version one */
const btnright_1 = document.querySelector(".btnright_1")
const btnleft_1 = document.querySelector(".btnleft_1")

function scrollGallery(pixels_1){
    document.querySelector("div.gallery-container_1").scrollBy({
        left: pixels_1,
        behavior: "smooth"
    })
}
btnright_1.addEventListener("click", function(){
    scrollGallery(1520)
})

btnleft_1.addEventListener("click", function(){
    scrollGallery(-1520)
})

/* Photographer take picture of animals version one */



/* 8 images of animals so kids can read before taking a quiz */
const openmodal1 = document.querySelector("#openmodal1")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

openmodal1.addEventListener("click", function(){
    modalOverlay.style.display = "block"
})
closeBtn.addEventListener("click", function(){
    modalOverlay.style.display = "none"
})


const openmodal_2 = document.querySelector("#openmodal_2")
const modalOverlay_2 = document.querySelector("#modalOverlay_2")
const closeBtn_2 = document.querySelector("#closeBtn_2")

openmodal_2.addEventListener("click", function(){
    modalOverlay_2.style.display = "block"
})
closeBtn_2.addEventListener("click", function(){
    modalOverlay_2.style.display = "none"
})


const openmodal_3 = document.querySelector("#openmodal_3")
const modalOverlay_3 = document.querySelector("#modalOverlay_3")
const closeBtn_3 = document.querySelector("#closeBtn_3")

openmodal_3.addEventListener("click", function(){
    modalOverlay_3.style.display = "block"
})
closeBtn_3.addEventListener("click", function(){
    modalOverlay_3.style.display = "none"
})


const openmodal_4 = document.querySelector("#openmodal_4")
const modalOverlay_4 = document.querySelector("#modalOverlay_4")
const closeBtn_4 = document.querySelector("#closeBtn_4")

openmodal_4.addEventListener("click", function(){
    modalOverlay_4.style.display = "block"
})
closeBtn_4.addEventListener("click", function(){
    modalOverlay_4.style.display = "none"
})


const openmodal_5 = document.querySelector("#openmodal_5")
const modalOverlay_5 = document.querySelector("#modalOverlay_5")
const closeBtn_5 = document.querySelector("#closeBtn_5")

openmodal_5.addEventListener("click", function(){
    modalOverlay_5.style.display = "block"
})
closeBtn_5.addEventListener("click", function(){
    modalOverlay_5.style.display = "none"
})


const openmodal_6 = document.querySelector("#openmodal_6")
const modalOverlay_6 = document.querySelector("#modalOverlay_6")
const closeBtn_6 = document.querySelector("#closeBtn_6")

openmodal_6.addEventListener("click", function(){
    modalOverlay_6.style.display = "block"
})
closeBtn_6.addEventListener("click", function(){
    modalOverlay_6.style.display = "none"
})


const openmodal_7 = document.querySelector("#openmodal_7")
const modalOverlay_7 = document.querySelector("#modalOverlay_7")
const closeBtn_7 = document.querySelector("#closeBtn_7")

openmodal_7.addEventListener("click", function(){
    modalOverlay_7.style.display = "block"
})
closeBtn_7.addEventListener("click", function(){
    modalOverlay_7.style.display = "none"
})


const openmodal_8 = document.querySelector("#openmodal_8")
const modalOverlay_8 = document.querySelector("#modalOverlay_8")
const closeBtn_8 = document.querySelector("#closeBtn_8")

openmodal_8.addEventListener("click", function(){
    modalOverlay_8.style.display = "block"
})
closeBtn_8.addEventListener("click", function(){
    modalOverlay_8.style.display = "none"
})
/* 8 images of animals so kids can read before taking a quiz */














/* giant squid */
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(5000, 0)
})




let count_width = document.querySelector(".resize_width")
window.addEventListener("scroll", function(){
    let x_pixels = window.scrollX
    count_width.innerHTML = `${x_pixels} px away`
})




let displaypexels = document.querySelector(".displaypexels")

window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

window.addEventListener("resize", function(){
    displaypexels.style.backgroundColor = "crimson"
})






const main_homework = document.querySelector("#main_homework");
window.addEventListener("scroll", function(){
    if (window.scrollY > 1000) {
        main_homework.style.backgroundColor = '#d504ffff';
    }
    else if (window.scrollY > 0){
        main_homework.style.backgroundColor = '#ff5e00ff'
    }
    else {
        main_homework.style.backgroundColor = '#f0f0f0';
    }
});


const width_colors = main_homework.querySelector('h1');
function widthResize() {
    const width = window.innerWidth;
    if (width > 1000) {
        width_colors.style.color = 'blue';
    } 
    else if (width > 700) {
        width_colors.style.color = 'green';
    } 
    else if (width > 300) {
        width_colors.style.color = 'orange';
    } 
    else {
        width_colors.style.color = '#ff0000ff';
    }
}

window.addEventListener("resize", widthResize);
widthResize(); 