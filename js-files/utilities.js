
function getInputFieldValueById(id){
    const inputValues = document.getElementById(id).value;
    const inputValuesNumber = parseFloat(inputValues)
    return inputValuesNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function getTextFieldValueByIdfromMainBalance(id){
    const textValueMainBalance = document.getElementById(id).innerText;
    const textValueMainBalanceNumber = parseFloat(textValueMainBalance);
    return textValueMainBalanceNumber;
}