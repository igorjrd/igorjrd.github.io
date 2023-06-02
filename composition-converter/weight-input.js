function showWeightInput() {
    let configDiv = document.getElementById("weightInputDiv");
    let text1 = document.createElement("label");
    text1.textContent = "Total weight:";
    let text2 = document.createElement("label");
    text2.textContent = "g";
    let input = document.createElement("input");
    input.type="text";
    input.value=20;
    input.id="WEIGHT_INPUT";
    configDiv.appendChild(text1);
    configDiv.appendChild(input);
    configDiv.appendChild(text2);
}

function resetWeightInput() {
    let weightDiv = document.getElementById("weightInputDiv");
    weightDiv.textContent = "";
}

function updateWeightInput() {
    switch (document.getElementById("targetUnitSelect").value) {
        case "WEIGHT":
            showWeightInput(); break;
        default:
            resetWeightInput();
    }
}