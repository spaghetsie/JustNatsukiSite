var offset_how_far_appear = -500;
var fading_el = document.getElementsByClassName("fade");
var top = document.getElementById("FeaturesImages");

function addclass(string) {
    [...fading_el].forEach(element => {
        element.classList.add(string);
    });
}

function removeclass(string) {
    [...fading_el].forEach(element => {
        element.classList.remove(string);
    });
}

window.onload = function () {
    var fading_el = document.getElementsByClassName("fade");
    var top = document.getElementById("FeaturesImages");
    var offset = top.getBoundingClientRect().top;
    if(offset+offset_how_far_appear<0){
        addclass("show");
    }
    else{
        addclass("hide");
    }
    
};

[...fading_el].forEach(element => {
        element.style.transition = "opacity 1s";
    });


function fading(top) {
    var top = document.getElementById("FeaturesImages");
    var offset = top.getBoundingClientRect().top;
    if(offset+offset_how_far_appear<0){
        removeclass("hide");
        addclass("show");
    }
    else{
        removeclass("show");
        addclass("hide");
    }
    setTimeout(() => fading(), 50);
}
fading();