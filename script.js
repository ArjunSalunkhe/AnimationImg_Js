let cur = document.querySelector(".cur");

window.addEventListener("mousemove",(dets)=>{
    cur.style.left = dets.x + -8 + "px";
    cur.style.top = dets.y + -8 + "px";
})
// -----------------------------------------------------


let el = document.querySelectorAll(".elem");


el.forEach((e,ind,arr)=>{
    e.addEventListener("mouseenter",()=>{
        e.childNodes[3].style.display = "block";
    })
    e.addEventListener("mouseleave",()=>{
        e.childNodes[3].style.display = "none";
    })
    e.addEventListener("mousemove",(dets)=>{
        e.childNodes[3].style.left = dets.x + -100 + "px"
    })
})
