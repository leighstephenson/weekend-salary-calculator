console.log("Let's crunch some numbers."); //test

let costArray = [];
let totalMonthly = 0; //used for adding costs of employee salary inputs
let maxMonthly = 20000 
let sum = 0;


function submitForm(event) {//start
    //console.log('Submission function works'); //test
    event.preventDefault(); //prevents default refreshing 
    
    let nameFirstVal = document.querySelector('#nameFirst-input').value;
    let nameLastVal = document.querySelector('#nameLast-input').value;
    let idVal = Number(document.querySelector('#id-input').value);           //all variables link to IDs in HTML
    let titleVal = document.querySelector('#jobTitle-input').value;
    let salaryVal= Number(document.querySelector('#salary-input').value); 
    let infoTable = document.querySelector('#infoData');
    let monthlyCost = salaryVal / 12; //divides annual salary by 12 to get monthly cost
    //let totalMonthlyCost = document.querySelector('#totalMonthlyCost')

    let userInput = document.querySelector(".userInput"); //sets var to = userInput class on HTML
    userInput.reset(); //makes input form reset

//! Push monthly cost into array
costArray.push(monthlyCost); //pushes the salary input / 12 into array
console.log('New Array from input data:', costArray); //console logs the new array 


//! Tring to find the sum of array 
    sum += monthlyCost //adds monthly cost to sum
    console.log("Current sum:",sum); //displays sum

   
      infoTable.innerHTML += `
    <tr>
            <td>${nameFirstVal}</td>
            <td>${nameLastVal}</td>
            <td>${idVal} </td>
            <td>${titleVal}</td>
            <td>${salaryVal}</td>
            <td>${monthlyCost}</td>
            <td>${sum} </td>
            <td button onClick="removeRow(event)"> Delete </td>
    </tr>
    `;

};//end submitForm() function 

  // //! Changing background color when over budget
//if (sum >= maxMonthly) { //start


function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element (whole music note generated from button)
    }; //end








  



