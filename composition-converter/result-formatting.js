function formatFractionalOutput(numericResults) {
    let formattedOutput = {};
    for (let element in numericResults)
        formattedOutput[element] = numericResults[element].toFixed(5);
    return formattedOutput
}

function formatPercentageOutput(numericResults) {
    let formattedOutput = {};
    for (let element in numericResults)
        formattedOutput[element] = (100 * numericResults[element]).toFixed(3);
    return formattedOutput
}

function formatWeightOutput(numericResults) {
    let formattedOutput = {};
    for (let element in numericResults)
        formattedOutput[element] = numericResults[element].toFixed(4);
    return formattedOutput
}