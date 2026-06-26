
// Temperature Tracker


let buttonHot = document.getElementById('buttonHot');

let buttonCold = document.getElementById('buttonCold');


let buttonReset = document.getElementById('buttonReset');

let displayBox = document.getElementById('displayBox');

let temperature = 20;




function updateDisplay(){
if (temperature > 25){

displayBox.innerText = "Too Hot";

} else if (temperature < 15){

displayBox.innerText = "Too Cold";
} else{
displayBox.innerText= temperature;
}


};



buttonHot.addEventListener('click',tempHot);

function tempHot(){


let result = temperature += 1;
updateDisplay();

};




buttonCold.addEventListener('click',tempCold);

function tempCold(){

temperature -=1;

updateDisplay();
};




buttonReset.addEventListener('click',tempReset);

function tempReset(){

temperature = 20;

updateDisplay();


};
