function convertPartsToAtomicFraction(elementAmounts) {
    let totalParts = 0;
    for (let element in elementAmounts)
        totalParts += elementAmounts[element];
    let elementAtomicPercentage = {}
    for (let element in elementAmounts)
        elementAtomicPercentage[element] = elementAmounts[element]/totalParts;
    return elementAtomicPercentage;
}

function convertAtomicToWeightFractions(elementAtomicPercentage) {
    let ratio = 0;
    for (let element in elementAtomicPercentage)
        ratio += elementAtomicPercentage[element] * elementWeight[element];
    let elementWeightPercentage = {};
    for (let element in elementAtomicPercentage)
        elementWeightPercentage[element] = elementAtomicPercentage[element] * elementWeight[element] / ratio;
    return elementWeightPercentage
}

function convertAtomicFractionsToCastWeights(elementAtomicPercentages) {
    let elementWeightPercentages = convertAtomicToWeightFractions(elementAtomicPercentages);
    let grossWeight = Number(document.getElementById("WEIGHT_INPUT").value)
    console.log(grossWeight)
    let castWeights = {};
    for (element in elementAtomicPercentages)
        castWeights[element] = grossWeight * elementWeightPercentages[element];
    return castWeights;
}