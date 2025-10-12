let displaypexels = document.querySelector(".displaypexels")

window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

// to the top 
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    if (y_pixels > 600){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})

// resize event: change background color if the window is resize 
window.addEventListener("resize", function(){
    displaypexels.style.backgroundColor = "crimson"
})

// load event: when the page fincihes laoding, open an alert dialog
/* window.addEventListener("load", function(){
    this.alert("Page fully loaded!")
})  */


// MODAL WINDOW
const openmodal1 = document.querySelector("#openmodal1")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

openmodal1.addEventListener("click", function(){
    modalOverlay.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    modalOverlay.style.display = "none"
})







/* Homework lab 9 */

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


let count_width = document.querySelector(".resize_width")
window.addEventListener("scroll", function(){
    let x_pixels = window.scrollX
    count_width.innerHTML = `${x_pixels} px away`
})

/* Homework lab 9 */

