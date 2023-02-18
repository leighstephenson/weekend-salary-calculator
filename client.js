//console.log("Let's crunch some numbers."); //test

let totalMonthly = 0; 
let costArray = [];


function submitForm(event) {//start
    //console.log('Submission function works'); //test
    event.preventDefault() 
    let userInput = document.querySelector(".userInput"); //sets var to = userInput class on HTML
    userInput.reset(); //makes input form reset
    
    //! .value always returns a string, for a number use Number(document.querySelector('#linkID').value);
    let nameFirstVal = document.querySelector('#nameFirst-input').value;
    let nameLastVal = document.querySelector('#nameLast-input').value;
    let idVal = Number(document.querySelector('#id-input').value);           //all variables link to IDs in HTML
    let titleVal = document.querySelector('#jobTitle-input').value;
    let salaryVal= Number(document.querySelector('#salary-input').value); 
    let infoTable = document.querySelector('#infoData');
    

    infoTable.innerHTML += `
        <tr>
            <td>${nameFirstVal}</td>
            <td>${nameLastVal}</td>
            <td>${idVal} </td>
            <td>${titleVal}</td>
            <td>${salaryVal}</td>

            <td button onClick="removeRow(event)"> Click to delete </td>
            </tr>
    `
};//end

function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element (whole music note generated from button)
    }; //end

