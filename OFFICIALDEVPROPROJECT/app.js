const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");
const blog1 = document.querySelector(".blog1");
const blog2 = document.querySelector(".blog2");
arrow_right.addEventListener("click" , changes);
function changes(e){
    console.log('hi')
    if(blog1.style.visibility == "visible"){
        blog1.style.width = "0";
        blog1.style.visibility = "hidden";
        blog2.style.visibility = "visible";
        blog2.style.width = 570 + "px";
        console.log(e.target);
    }
}