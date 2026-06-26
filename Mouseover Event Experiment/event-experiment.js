// Mouse Over eventListener

let hoverElement= document.getElementById('hoverEffect');

hoverElement.addEventListener('mouseover',colorChange);

function colorChange(){
    hoverElement.style.backgroundColor= "red";
};

hoverElement.addEventListener('mouseout', returnColor);

function returnColor(){
    hoverElement.style.backgroundColor= "pink";
};