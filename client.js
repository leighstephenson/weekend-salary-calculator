console.log("Let's crunch some numbers."); //test

let totalMonthly = 0; 
let costArray = [];
let salaryInput = document.querySelector('#salary-input');
let sum = 0;



function submitForm(event) {//start
    //console.log('Submission function works'); //test
    event.preventDefault() 
    
    let nameFirstVal = document.querySelector('#nameFirst-input').value;
    let nameLastVal = document.querySelector('#nameLast-input').value;
    let idVal = Number(document.querySelector('#id-input').value);           //all variables link to IDs in HTML
    let titleVal = document.querySelector('#jobTitle-input').value;
    let salaryVal= Number(document.querySelector('#salary-input').value); 
    let infoTable = document.querySelector('#infoData');
    let monthlyCost = salaryVal / 12; //divides annual salary by 12 to get monthly cost

    let userInput = document.querySelector(".userInput"); //sets var to = userInput class on HTML
    userInput.reset(); //makes input form reset
    
    infoTable.innerHTML += `
    <tr>
            <td>${nameFirstVal}</td>
            <td>${nameLastVal}</td>
            <td>${idVal} </td>
            <td>${titleVal}</td>
            <td>${salaryVal}</td>
            <td>${monthlyCost}</td>
            <td button onClick="removeRow(event)"> Delete </td>
    </tr>
    `;

    costArray.push(monthlyCost); //pushes the salary input into array
    console.log(costArray); //console logs the new array 
  


};//end submitForm() function

//!find the sum- testing, troubleshooting
// costArray.forEach(item => {
//     sum += item; 
//     console.log('Current sum', sum)
// });
//for (let i = 0; i < costArray.length; i++) {
//    sum += costArray[i];
//  }



function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element (whole music note generated from button)
    }; //end
