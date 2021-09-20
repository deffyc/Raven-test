"use strict";

const personName = document.getElementById(`personName`),
    personAge = document.getElementById(`personAge`),
    sendInfoButton = document.getElementById(`sendInfoButton`);

//Field Formats

const inputFieldFormats = {
    'name': `[a-záéíóúñ]`,
    'age': `[0-9]`
};

const inputsLengthData = {
    'personName': [personName, 3, 20],
    'personAge': [personAge, 10, 100]
};

//Verificators

const verifyInputFormat = (expresionToValidate, event) => {
    const keyPressed = event.key;
    const expectedValues = new RegExp(expresionToValidate, `i`);

    (expectedValues.test(keyPressed)) ?
        keyPressed :
        event.preventDefault();
};

const hasInputWrongLength = (valueProvided, minLength, maxLength) => {
    if ((valueProvided.length < minLength) || (valueProvided.length > maxLength)) {
        alert(`Error en el Elemento Nombre`);
        return true;
    }
    return false;
};

const IsInputWrongNumber = (valueProvided, minLength, maxLength) => {
    if ((parseInt(valueProvided) >= minLength) && (parseInt(valueProvided) <= maxLength)) {
        return false;
    }
        alert(`Error en el Elemento Edad`);
        return true;
};

// Global Verificator

const verifyFormData = (event) => {

    const [name, minLength, maxLength] = inputsLengthData.personName;
    const [age, minAge, maxAge] = inputsLengthData.personAge;

    if ((hasInputWrongLength(name.value, minLength, maxLength)) || (IsInputWrongNumber(age.value, minAge, maxAge))) {
        event.preventDefault();
        return false;
    }
    
    const personData = {
        'personName': name.value,
        'personAge': age.value
        };

    localStorage.setItem('personData', JSON.stringify(personData));
};

//Events

personName.addEventListener(`keypress`, (event) => verifyInputFormat(inputFieldFormats.name, event));
personAge.addEventListener(`keypress`, (event) => verifyInputFormat(inputFieldFormats.age, event));
sendInfoButton.addEventListener(`click`, verifyFormData);