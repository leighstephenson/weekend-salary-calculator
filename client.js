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
    let userInput = document.querySelector(".userInput"); //sets var to = userInput class on HTML
    userInput.reset(); //makes input form reset

//! Push monthly cost into array
costArray.push(monthlyCost); //pushes the salary input / 12 into array
console.log('New Array of monthly cost per employee:', costArray); //console logs the new array 


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
            <td button onClick="removeRow(event)"> Delete </td>
    </tr>
    `;

//! Displaying total monthly cost on the DOM
    document.querySelector('#totalMonthlyCost').innerHTML = monthlyCost; //links to totalMonthlyCost on HTML
    changeColor(sum) //runs changeColor function

};//end submitForm() function 



 // //! Changing background color when over budget
function changeColor(sum){ //start
    if (sum > maxMonthly){
        document.querySelector('#totalMonthlyCost').style.backgroundColor = 'red'; //links to totalMonthlyCost id and turn background to red 
        console.log('You are over budget!')
    }//ends if statement
}//end 


//! Removing row
function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element on click
    }; //end

