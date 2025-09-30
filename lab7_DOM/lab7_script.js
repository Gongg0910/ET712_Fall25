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



// SEP 30
// event handler
 let btnpress = document.querySelector(".btnpress")
 btnpress.onclick = function(){alert(`${new Date()}`)}




 // mouse events
 let x = document.querySelector(".x")
 let circle_paragraph = document.querySelector(".circle_paragraph")
 x.onmouseover = function(){
    //circle_paragraph.textContent += "- CIRCLE -"
    circle_paragraph.innerHTML += '<img src="images/fish.gif" class="aaa">';
}



 // event listener
 // collect the element
 let box_color = document.querySelector(".box_color")
 // function to randomly pick a color as a rgb value

const randomRGB = function(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
box_color.addEventListener("mouseout",function(){
    box_color.style.backgroundColor = randomRGB()

})



// key event
// collect the element
let inputtext = document.querySelector(".inputtext")
let username_paragraph = document.querySelector(".username_paragraph")

inputtext.addEventListener("keydown", function(){
    username_paragraph.textContent = "Username MUST have 3+ characters"
})







// LAB Exercise 
/* ============================================================== */
/* Lab 7 Homework */
let ps1 = document.querySelector(".ps1");
ps1.addEventListener("mouseout", function() {

    ps1.textContent = "Gonzalo Guerra"; 
});

let ps2 = document.querySelector(".ps2");
ps2.addEventListener("click", function() {

    ps2.style.fontSize = "25px";
    ps2.style.color = "olive";
});



let changeColor = document.querySelector('div.divs2');
changeColor.addEventListener('click', function() {

    changeColor.style.backgroundColor = 'indigo';
});

let changeSize = document.querySelector('div.divs3'); 
document.addEventListener('keydown', function(event) {
    
    changeSize.style.width = '300px'; 
});
 /* ===================================================== */















