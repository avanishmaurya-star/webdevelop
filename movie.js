
let valuesArray = [];

function addToArray() {

    const inputField = document.getElementById('moviename');
   
    const value = inputField.value;
    
    valuesArray.push(value);
    
    inputField.value = '';

    console.log(valuesArray);
}

function printArray() {
    
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = '';
    
    const arrayString = valuesArray.join(', ');

    outputDiv.textContent = `[${arrayString}]`;
}
function remove(){
    const inputField = document.getElementById('moviename');
   
    const value = inputField.value;
    
    valuesArray.pop();
    
    inputField.value = '';

    console.log(valuesArray);
}