// ELEMENT OPTIONS

function addNewElement() {

    // Get the main Div in which all the other divs will be added
    var entriesDiv = document.getElementById('entriesDiv');

    // Create a new div for holding text and button input elements
    var newDiv = document.createElement('div');

    // Create a new text input
    var newDropdown = document.createElement('select');
    newDropdown.setAttribute("name", "elementSelect");
    
    for (let element in elementWeight) {
        newDropdownOption = document.createElement("option");
        newDropdownOption.value = element;
        newDropdownOption.text = element;
        newDropdown.add(newDropdownOption);
    }

    // Create buttons for removing inputs
    var newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "elementQuantity";
    newInput.value = "1";
    newInput.setAttribute("class", "quantityInput")


    var newDelButton = document.createElement('input');
    newDelButton.type = "button";
    newDelButton.value = " − ";
    newDelButton.setAttribute("class", "Buttons");

    // Append new text input to the newDiv
    newDiv.appendChild(newDropdown);
    newDiv.appendChild(newInput);

    // Append new button inputs to the newDiv
    newDiv.appendChild(newDelButton);

    // Append newDiv input to the entriesDiv div
    entriesDiv.appendChild(newDiv);

    // Add a handler to button for deleting the newDiv from the entriesDiv
    newDelButton.onclick = function() {
        entriesDiv.removeChild(newDiv);
    };
}