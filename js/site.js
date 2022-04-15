//Get values from the user. We need to get the game and the over values.
function getValues(){

}

//get the user values from the page
let gameValue = document.getElementById("gameValue").value;
let overValue = document.getElementById("overValue").value;

//parse for numbers
gameValue = parseInt(gameValue);
overValue = parseInt(overValue);

//check that the numbers are integers
    if (Number.isInteger(gameValue) && Number.isInteger(overValue)) {

    //we call gameOver
    let goArray = gameOver(gameValue, overValue);
    //call displayData and write the values to the screen

    displayData(goArray);
    }else{
        alert("You must enter an integer.")
    }

//do game over
function gameOver(gameValue, overValue)
{
    let returnArray = [];
    //initialize the returnArray

    //loop from 1 to 100
    for (let i = 1; i <= 100 ; i++) {
         
        //check to see if divisible by both (3 and 5)
        //check to see if divisible by game value (3)
        //check to see if divisible by over value (5)
        if(i % gameValue == 0 && i % overValue == 0){
            returnArray.push('GameOver');
        }else if (i % gameValue == 0){
            returnArray.push('Game');
        }else if (i % overValue == 0){
            returnArray.push('Over')
        }else{
            returnArray.push(i);
        }
    }    
      
    return returnArray;
}

//loop over the array and create a tablerow for each item
function displayData(goArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("goTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < goArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the tds and put them in an array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(goArray[index]);
        rowCols[0].textContent = goArray[index];

        rowCols[1].classList.add(goArray[index + 1]);
        rowCols[1].textContent = goArray[index+1];

        rowCols[2].classList.add(goArray[index + 2]);
        rowCols[2].textContent = goArray[index+2];

        rowCols[3].classList.add(goArray[index + 3]);
        rowCols[3].textContent = goArray[index+3];

        rowCols[4].classList.add(goArray[index + 4]);
        rowCols[4].textContent = goArray[index+4];

        tableBody.appendChild(tableRow);
    }
    
    //add all the rows to the table
}