let inputField = document.getElementById('inputField');

let displayField = document.getElementById('displayField');

inputField.addEventListener('input',reflect);

function reflect(){
displayField.innerText= inputField.value;


};

// Character Display

let inputArea= document.getElementById('inputArea');

let displayArea= document.getElementById('displayArea');



inputArea.addEventListener('input',updateDisplayContent);


function updateDisplayContent(){
let inputLength= inputArea.value.length;



if (inputLength > 10){

 displayArea.innerText=inputLength;
displayArea.style.color='red';

} else  {

displayArea.innerText=inputLength;
displayArea.style.color='black';

}
};

