function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th = document.createElement("th");
    let text = document.createTextNode("Element");
    th.appendChild(text);
    row.appendChild(th);
    for (let key in data) {
        th = document.createElement("th");
        text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let bold = document.createElement('strong');
    let text = document.createTextNode(TargetUnit.getSelected().symbol);
    bold.appendChild(text);
    cell.appendChild(bold);
    for (key in data) {
        cell = row.insertCell();
        text = document.createTextNode(data[key]);
        cell.appendChild(text);
    }
}

function renderResultsTable(elementAmounts) {
    var resultsDiv = document.getElementById('resultsDiv');
    var tableDiv = document.createElement('div');
    var table = document.createElement('table');
    table.setAttribute("style", `width: ${elementAmounts.length * 15}px;`)
    generateTableHead(table, elementAmounts);
    generateTable(table, elementAmounts);
    tableDiv.appendChild(table);
    resultsDiv.appendChild(tableDiv);
}

function resetResultsTable() {
    let resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.textContent = "";
}