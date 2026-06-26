let students=
[
{firstName: "Thuso",
 lastName: "Dlamini",
score: 85
},

{firstName: "Mary",
 lastName: "Thaba",
score: 95
},

{firstName: "Loapi",
 lastName: "Mayer",
score: 42
},

{firstName: "Jennifer",
 lastName: "Williams",
score: 67
},

{firstName: "Maatla",
 lastName: "Shongwe",
score: 70
},

{firstName: "Rethabile",
 lastName: "Losika",
score: 50
}

];

let defaultField = document.getElementById('defaultField');

let generalStatistics= document.getElementById('generalStatistics');



window.addEventListener('load',defaultDisplay);

function defaultDisplay(){

    let output= "";

    students.forEach (person =>{

    output += `${person.firstName} ${person.lastName} \n ${person.score} \n`;

    });

defaultField.innerText= output;

// *****

    let passed = students.filter(person => {
    return person.score > 50
    });

    let failed = students.filter(person =>{
        return person.score <= 50
    });

// ******

  let sum = students.reduce((totalSoFar, person) => {

   return totalSoFar + person.score }, 0);

    let average =sum/ students.length;

// ******

let topStudent = students.reduce((highest, person) =>{

if (person.score < highest.score){

    return highest
    
} else {
     return  person     
}
}, students[0]);
    

//****


    let stats= [
    `Total Students: ${students.length} \n
    Passed Students: ${passed.length} \n
    Failed Students: ${failed.length} \n
    Average Score: ${average} \n
    Top Student: ${topStudent.firstName} ${topStudent.lastName}`

    ];

generalStatistics.innerText= stats;


};



// ****************************************************

let inputField = document.getElementById('inputField');

let displayField = document.getElementById('displayField');

inputField.addEventListener('input',reflect);

function reflect(){
displayField.innerText= inputField.value;

};

