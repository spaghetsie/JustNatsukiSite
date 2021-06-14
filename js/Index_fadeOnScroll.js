var offset_how_far_appear = -400
var fading_el = document.getElementById("fade");


var offset = fading_el.getBoundingClientRect().top;
if(offset+offset_how_far_appear<0){
    fading_el.classList.add("show");
}
else{
    fading_el.classList.add("hide");
}

function fading() {
    var offset = fading_el.getBoundingClientRect().top;
    if(offset+offset_how_far_appear<0){
        fading_el.classList.remove("hide");
        fading_el.classList.add("show");
    }
    else{
        fading_el.classList.remove("show");
        fading_el.classList.add("hide");
    }
    setTimeout(() => fading(), 50);
}
setTimeout(function (){
    fading_el.style.transition = "opacity 0.8s"
fading();
}, 700)
