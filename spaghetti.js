const printValueHasBeenCalculated = () =>{
    const calculateForm = document.getElementById('calculateForm')

    calculateForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const formData = new FormData(calculateForm);
        const formValues = {}
        formData.forEach((element, id)=>{
            formValues[id] = element;
        })
        
        const allConversions = {
            inch: 0.393701 * Number(formValues.userNumber),
            foot: 0.0328084 * Number(formValues.userNumber),
            yard: 0.0109361 * Number(formValues.userNumber),
            metre: 0.01 * Number(formValues.userNumber),
            kilometer: 0.000010 * Number(formValues.userNumber),
        }
        if(formValues.system==='international'){
            const result = document.getElementById('result');
            result.innerHTML='';
            const metre = document.createElement('p');
            metre.textContent='Metre: '+allConversions.metre;
            result.appendChild(metre);
            const kilometer = document.createElement('p');
            kilometer.textContent='kilometer: ' + allConversions.kilometer
            result.appendChild(kilometer);
        } else{
            const result = document.getElementById('result');
            result.innerHTML='';
            const yard = document.createElement('p');
            yard.textContent = 'Yard: '+allConversions.yard;
            result.appendChild(yard);
            const foot = document.createElement('p');
            foot.textContent = 'Foot: '+allConversions.foot;
            result.appendChild(foot);
            const inch = document.createElement('p');
            inch.textContent = 'Inch: '+allConversions.inch;
            result.appendChild(inch);
        }
    })
}
printValueHasBeenCalculated()