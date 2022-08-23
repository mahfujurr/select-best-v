// Get value from input field

function getValueFromInputField(inputFieldId){
    const getInputFieldId = document.getElementById(inputFieldId);
    const inputFieldString = getInputFieldId.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

// get inner text value from an element field

function getTextFromElementField(elementFieldId){
    const getElementId = document.getElementById(elementFieldId);
    const ElementString = getElementId.innerText;
    const elementvalue = parseFloat(ElementString);
    return elementvalue; 
}

// get inner text only from element field

function getInnerTextOnly(innerTextElement){
    const elementId = document.getElementById(innerTextElement);
    const elementInnerText =elementId.innerText;
    return elementInnerText;
}