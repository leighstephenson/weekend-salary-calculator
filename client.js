//console.log("Let's crunch some numbers."); //test

let totalMonthly = 0; 
let costArray = [];
let salaryInput = document.querySelector('#salary-input');



function submitForm(event) {//start
    //console.log('Submission function works'); //test
    event.preventDefault() 
    
    //! .value always returns a string, for a number use Number(document.querySelector('#linkID').value);
    let nameFirstVal = document.querySelector('#nameFirst-input').value;
    let nameLastVal = document.querySelector('#nameLast-input').value;
    let idVal = Number(document.querySelector('#id-input').value);           //all variables link to IDs in HTML
    let titleVal = document.querySelector('#jobTitle-input').value;
    let salaryVal= Number(document.querySelector('#salary-input').value); 
    let infoTable = document.querySelector('#infoData');
    
    let userInput = document.querySelector(".userInput"); //sets var to = userInput class on HTML
    userInput.reset(); //makes input form reset
    
    infoTable.innerHTML += `
    <tr>
            <td>${nameFirstVal}</td>
            <td>${nameLastVal}</td>
            <td>${idVal} </td>
            <td>${titleVal}</td>
            <td>${salaryVal}</td>

            <td button onClick="removeRow(event)"> Click to delete </td>
     </tr>
    `;
    let totalMonthly = salaryVal / 12; //divides annual salary by 12 to get monthly cost
    costArray.push(totalMonthly); //pushes the salary input into array
    console.log(costArray); //console logs the new array 
  
    
};//end


function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element (whole music note generated from button)
    }; //end



