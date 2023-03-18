function getInputFieldValueById(inputFieldId){
    const depositField = document.getElementById(inputFieldId)
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    return newDepositAmount;
}

function getTextElementById(totalElement){
    const depositTotal = document.getElementById(totalElement)
    const previousDepositAmountString = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    return previousDepositAmount;
}

function setTextElementById(totalElement, newValue){
    const depositTotal = document.getElementById(totalElement)
    depositTotal.innerText = newValue;
}