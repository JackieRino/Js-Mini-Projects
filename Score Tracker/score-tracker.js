// SCORE TRACKER

let addFive = document.getElementById('addFive');
let scoreDisplay = document.getElementById('scoreDisplay');
let score= 0;



function updateScore(){
if (score< 0){

    scoreDisplay.innerText= score;
    scoreDisplay.style.color="red";
} else {
scoreDisplay.innerText = score;
scoreDisplay.style.color= "black";

}

};




addFive.addEventListener('click', increaseFive );

function increaseFive(){
score += 5;

updateScore();


};





let minusFive = document.getElementById('minusFive');

minusFive.addEventListener('click', decreaseFive);

function decreaseFive(){
score -= 5;

updateScore();

};



let reset = document.getElementById('reset');

reset.addEventListener('click', resetZero);

function resetZero(){
score=0;

updateScore();

};