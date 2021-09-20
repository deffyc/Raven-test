import {ravenData} from './data.js';

const personData = JSON.parse(localStorage.getItem('personData'));
localStorage.clear();
if(!personData){
    location.replace('./index.html');
}

const personAnswers = {};

let actualPlaque = 0;
const selectionList = document.getElementById('selectionsListContainer'),
    baseImage = document.getElementById('baseImageContainer'),
    selectionFirstRow = document.getElementById('firstRowSelectionWrapper'),
    selectionSecondRow = document.getElementById('secondRowSelectionWrapper');

const plaqueCreator = (ravenData, selection, className) => {
    const plaqueContainer = document.createElement('div'),
          temporalPlaque = document.createElement('img');
    temporalPlaque.setAttribute('id', `selection-${selection.charAt(selection.length - 1)}`);
    temporalPlaque.setAttribute('name', selection);
    temporalPlaque.setAttribute('alt', `Raven's test, Plaque ${selection}`);
    temporalPlaque.classList.add(`${className}`);
    temporalPlaque.setAttribute('src', `${ravenData[selection]}`);
    plaqueContainer.appendChild(temporalPlaque);
    plaqueContainer.setAttribute('id', `plaque${selection.charAt(selection.length - 1)}Container`);

    return plaqueContainer;
};

const generateInterfaceElements = (selectionsPerRow, selectionsClassName) => {

    let plaqueSelector = 0;

    for (let selection in ravenData[actualPlaque]) {

        if (plaqueSelector == 0) {
            const mainImage = document.createElement('img');
            mainImage.setAttribute('src', `${ravenData[actualPlaque][selection]}`);
            mainImage.setAttribute('alt', `Raven's test, Plaque ${selection}`);
            mainImage.classList.add('base-image-container');
            baseImage.appendChild(mainImage);
        }
        else if ((plaqueSelector => 1) && (plaqueSelector <= selectionsPerRow)) {
            const temporalPlaque = plaqueCreator(ravenData[actualPlaque], selection, selectionsClassName);
            selectionFirstRow.appendChild(temporalPlaque);
        }
        else if (plaqueSelector > selectionsPerRow) {
            const temporalPlaque = plaqueCreator(ravenData[actualPlaque], selection, selectionsClassName);
            selectionSecondRow.appendChild(temporalPlaque);
        }
        plaqueSelector++;
    }
};

const removeChildrenElements = (DomElement) => {
    while (DomElement.firstChild) {
        DomElement.removeChild(DomElement.firstChild);
    }
};

const clearOldPlaques = () => {
    removeChildrenElements(baseImage);
    removeChildrenElements(selectionFirstRow);
    removeChildrenElements(selectionSecondRow);
};

const manageInterfaceCreation = () => {
    (actualPlaque < 24) ?
        generateInterfaceElements(3, 'three-elements-selection-wrapper') :
        generateInterfaceElements(4, 'four-elements-selection-wrapper');
};

const registerSelection = (selectedPlaque) => {
    const plaque = selectedPlaque.getAttribute('name').slice(0,-2);
    const valueSelected = parseInt(selectedPlaque.id.slice(-1));
    personAnswers[plaque] = valueSelected;
}

const manageSelection = (event) => {
    const selectedPlaque = event.target;
    if (selectedPlaque.childElementCount === 0) {
        registerSelection(selectedPlaque);
        actualPlaque++;
        if(actualPlaque === 60){
            const dataToEvaluate = [personData, personAnswers];
            localStorage.setItem('dataToEvaluate', JSON.stringify(dataToEvaluate));
            location.replace('./result.html');
        }
        clearOldPlaques();
        manageInterfaceCreation();
    }
};

generateInterfaceElements(3, 'three-elements-selection-wrapper');

selectionList.addEventListener('click', manageSelection);