console.log("Let's crunch some numbers.");


function submitForm(event) {
    console.log('submitForm');
    event.preventDefault(); // Stop the page from refreshing as default


    //! .value always returns a string, for a number use Number(string)

    let nameFirstVal = document.querySelector('#nameFirst-input').value;
    let nameLastVal = document.querySelector('#nameLast-input').value;
    let idVal = document.querySelector('#id-input').value
    let titleVal = document.querySelector('#jobTitle-input').value;
    let salaryVal= document.querySelector('#salary-input').value; 
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
    `;

}//end

function removeRow(event) { //start
    event.target.parentElement.remove(); //removes parent element (whole music note generated from button)
    } //end
    