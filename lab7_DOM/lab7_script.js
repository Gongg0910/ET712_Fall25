/** 
 * Gonzalo Guerra
 * lab 7 - Intro to DOM */

console.log("Full name")
// access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)

// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)

// access(select) element by tag name
let heading1 = document.querySelector("h1")
console.log(heading1)

// access(select) all element by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("Loop through each element in the mode lsit")
for(let index = 0; index<description_all.length; index++){
    console.log(`${description_all[index].textContent}`)    
}

// collect(select) the elements

let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle= document.querySelector(".btn_rectangle")

// add an event to each button
btn_square.addEventListener("click", function(){
    shape.className = "square"
    shape.textContent = "square".toUpperCase()
    shape.style.backgroundColor = "gold";
    shape.style.fontSize = "3rem"
})

btn_circle.addEventListener("click", function(){
    shape.className = "circle"
    shape.textContent = "CIRCLE"
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "hotpink";
    
})

btn_rectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    shape.textContent = "RECTANGLE"
    shape.style.backgroundColor = "gray";
    shape.style.fontSize = "2rem"
})

// style.backgroungcolor = "lightblue"







/* Lab 7 Homework */


let p_1 = document.querySelector('p.ps1');
p_1.addEventListener('mouseout', function() {

    p_1.textContent = "Gonzalo Guerra"; 
});

let p_2 = document.querySelector('p.ps2');
p_2.addEventListener('click', function() {

    p_2.style.fontSize = '25px';
    p_2.style.color = 'olive';
});



let changeColor = document.querySelector('div.divs2');
changeColor.addEventListener('click', function() {

    changeColor.style.backgroundColor = 'indigo';
});


let changeSize = document.querySelector('div.divs3'); 
document.addEventListener('keydown', function(event) {

    changeSize.style.width = '300px'; 
});
