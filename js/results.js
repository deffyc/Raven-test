import {getPersonGroup, getPercentile} from './percentiles.js';
import {getNumberOfRightAnswers, getPersonDiagnostic} from './calification.js';

const [personData, personAnswers] = JSON.parse(localStorage.getItem('dataToEvaluate')),
      resultsTitle = document.getElementById('title'),
      resultsContainer = document.getElementById('personResults');

localStorage.clear();

const createResultField = (message, value) => {
      const paragraphElement = document.createElement('p');
      
      paragraphElement.textContent = `${message} ${value}`;
      resultsContainer.appendChild(paragraphElement);
};


const personGroup = getPersonGroup(personData.personAge);

const personHits = getNumberOfRightAnswers(personAnswers);
createResultField('Respuestas correctas: ', personHits);

const personPercentile = getPercentile(personHits, personGroup);
createResultField('Percentil: ', personPercentile);

const [capacityDiagnostic, capacityRange] = getPersonDiagnostic(personPercentile);
createResultField('Capacidad Intelectual: ', capacityDiagnostic);
createResultField('Rango de capacidad: ',capacityRange);
resultsTitle.textContent += ` ${personData.personName}.`;
