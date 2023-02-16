/* ========================>
==========Table Of Contents===========
----------------------------------
==> //!1. Get the Value Of Input and value By Function
 1.1 Get The Input with Id
 1.2 Get the value of input 
 1.3 Convert Value String to Number
 1.4 Clear the input Field After Getting the Input Value
 ==>//! 2.Get The Value of Element  By Function
2.1Get the element by id
2.2 Get The Value Of Element
2.3 Convert The value String to Number
==>//! 3.Get Element and Set New Element

 <================================*/
//! 1. Get the Value Of Input and value By Function
function getInputValueById(inputId) {
    //? 1.1 Get The Input with Id
    const inputFeild = document.getElementById(inputId);
    //? 1.2 Get the value of input 
    const inputFeildValueString = inputFeild.value;
    //? 1.3 Convert Value String to Number
    const inputValue = parseFloat(inputFeildValueString);
    //? 1.4 Clear the input Field After Getting the Input Value
    inputFeild.value = '';
    return inputValue;
}
//! 2.Get The Value of Element  By Function
function getTextElementById(elementId) {
    //2.1Get the element by id
    const element = document.getElementById(elementId);
    //2.2 Get The Value Of Element
    const elementTextString = element.innerText;
    //2.3 Convert The value String to Number
    const elementText = parseFloat(elementTextString);
    return elementText;
}

//! 3.Get Element and Set New Element
function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}