// Get value from input field

function getValueFromInputField(inputFieldId){
    const getInputFieldId = document.getElementById(inputFieldId);
    const inputFieldString = getInputFieldId.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

// get inner text from an element 

function getTextFromElementField(elementFieldId){
    const getElementId = document.getElementById(elementFieldId);
    const ElementString = getElementId.innerText;
    const elementvalue = parseFloat(ElementString);
    return elementvalue; 
}