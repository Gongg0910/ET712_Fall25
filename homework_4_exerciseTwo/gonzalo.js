const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

function scrollGallery(pixels){
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}
btnright.addEventListener("click", function(){
    scrollGallery(1550)
})

btnleft.addEventListener("click", function(){
    scrollGallery(-1550)
})

