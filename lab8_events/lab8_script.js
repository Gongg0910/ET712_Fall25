/* 
 * Gonzalo Guerra
 * lab 8, events
 * oct 7, 2025
 */

console.log("Gonzalo Guerra")
let btnpressme = document.querySelector(".btnpressme")

// btnpressme.textContent 
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent ==  "PRESS ME!"){
        e.target.textContent = "Key was preseed"
    }
    else{
        e.target.textContent = "PRESS ME!"
    }

    // toggle between classes in css
    e.target.classList.toggle("btnactive")
})



/* event delegation */
let list = document.querySelector("#list")
list.addEventListener("click", function(event){
    // check if the clicked element is a <li> element
    if(event.target.tagName.toLowerCase()==="li"){
        // remove the clicked <li>
        event.target.remove()
    }
})



/* prevent default */
const qcclink = document.querySelector(".qcclink")
qcclink.addEventListener("click", function(e){
    e.preventDefault()
    alert("QCC website is under maintainance")
})



/* WINDOW EVENT */
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(200, 0)
})



/* photo gallery scrolling */

const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")


// define a funcion to scroll the gallery byan image size()

function scrollGallery(pixels){
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}

// add event to each button
btnright.addEventListener("click", function(){
    scrollGallery(500)
})

btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})

