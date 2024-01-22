import converter from './converter.js'

const calculateForm = document.getElementById('calculateForm')
const result = document.getElementById('result');

calculateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(calculateForm);
    const formValues = {};
    formData.forEach((element, id) => {
        formValues[id] = element;
    })
    const valuesConverted = converter[formValues.system](formValues.userNumber);

    const nodes = Object.entries(valuesConverted).map(([key, value]) => `<p>${key}: ${value}</p>`).join('');
    result.innerHTML = nodes;
})