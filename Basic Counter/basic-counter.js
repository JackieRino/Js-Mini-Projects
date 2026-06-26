// BASIC COUNTER

let addButton = document.getElementById('add');
let display = document.getElementById('display');
let counter = 0;

addButton.addEventListener('click', increase);

function increase(){
counter ++;

display.innerText= counter;

};





let minusButton = document.getElementById('minus');

minusButton.addEventListener('click', decrease);

function decrease(){

counter --;

display.innerText= counter;

};



/*
Logic:
~ minusButton/ addButton are the variable place holders for the element with the corresponding Id. Basically go into document, find this specific Id and name it's element addButton or minusButton.

~ display is also the place holder of the html element which has that corresponding ID.

~ counter is the thing we're manipulating.

~ event listener at each button says: when this button is clicked, add or minus.
Event listener has 2 parameters, the action or event that's been listened to and the result of that event.in this case either increase or decrease depending on which button was clicked.

~ inside each function there is a line that changes the contents of display into whatever the result of counter now is.

*/










