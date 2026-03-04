let lenSelector = document.getElementById('length');
let wtSelector = document.getElementById('weight');
let tempSelector = document.getElementById('temperature');
let lengthSection = document.getElementById('length-section');
let weightSection = document.getElementById('weight-section');
let tempSection = document.getElementById('temperature-section');
let resultSection = document.getElementById('result-section');
let lengthConvert = document.getElementById('len-convert-btn');
let weightConvert = document.getElementById('wt-convert-btn');
let tempConvert = document.getElementById('temp-convert-btn');
let resetButton = document.getElementById('reset-btn');

let output = ''

lenSelector.addEventListener('click',function(e){
    e.preventDefault();
    resultSection.querySelector('#res').textContent =  ''
    resultSection.className = 'hidden'
    if(wtSelector.className == 'highlight'){
        wtSelector.className = '';
        weightSection.className = 'hidden';
    }
    else if(tempSelector.className == 'highlight'){
        tempSelector.className = '';
        tempSection.className = 'hidden';
    }
    lenSelector.className = 'highlight';
    lengthSection.className = 'active';
})

wtSelector.addEventListener('click',function(e){
    e.preventDefault();
    resultSection.querySelector('#res').textContent =  ''
    resultSection.className = 'hidden'
    if(tempSelector.className == 'highlight'){
        tempSelector.className = '';
        tempSection.className = 'hidden';
    }
    else if(lenSelector.className == 'highlight'){
        lenSelector.className = '';
        lengthSection.className = 'hidden';
    }
    wtSelector.className = 'highlight';
    weightSection.className = 'active';
})

tempSelector.addEventListener('click',function(e){
    e.preventDefault();
    resultSection.querySelector('#res').textContent =  ''
    resultSection.className = 'hidden'
    if(wtSelector.className == 'highlight'){
        wtSelector.className = '';
        weightSection.className = 'hidden';
    }
    else if(lenSelector.className == 'highlight'){
        lenSelector.className = '';
        lengthSection.className = 'hidden';
    }
    tempSelector.className = 'highlight';
    tempSection.className = 'active';
})

lengthConvert.addEventListener('click',function(e){
    const lenUnits = {
        'm':1,
        'km': 1000,
        'mile': 1609.34,
        'cm': 0.01,
        'ft': 0.3048,
        'inch': 0.0254
    }
    inputLength = Number(lengthSection.querySelector('#ipvalue').value)
    toUnit = lengthSection.querySelector('#tounit').value
    fromUnit = lengthSection.querySelector('#fromunit').value
    let res = resultSection.querySelector('#res')
    if(!inputLength || !toUnit || !fromUnit){
        res.textContent = 'Missing fields found...'
    }
    else if(!(toUnit in lenUnits) || !(fromUnit in lenUnits)){
        res.textContent = 'Invalid Unit Entered...'
    }else{
        const value = inputLength*lenUnits[fromUnit]*lenUnits[toUnit]
        res.textContent = `${inputLength} ${fromUnit} = ${value} ${toUnit}`
    }
    lengthSection.className = 'hidden'
    resultSection.className = 'active'
})

weightConvert.addEventListener('click',function(e){
    const wtUnits = {
        'g': 1,
        'kg': 1000,
        'mg': 0.01,
        'oz': 28.3495,
        'pound':453.592
    }
    inputWeight = Number(weightSection.querySelector('#ipvalue').value)
    toUnit = weightSection.querySelector('#tounit').value
    fromUnit = weightSection.querySelector('#fromunit').value
    let res = resultSection.querySelector('#res')
    if(!inputWeight || !toUnit || !fromUnit){
        res.textContent = 'Missing fields found...'
    }
    else if(!(toUnit in wtUnits) || !(fromUnit in wtUnits)){
        res.textContent = 'Invalid Unit Entered...'
    }else{
        const value = inputLength*wtUnits[fromUnit]*wtUnits[toUnit]
        res.textContent = `${inputLength} ${fromUnit} = ${value} ${toUnit}`
    }
    weightSection.className = 'hidden'
    resultSection.className = 'active'
})

tempConvert.addEventListener('click',function(e){
    const tempUnits = ['K','C','F']
    inputTemp = Number(tempSection.querySelector('#ipvalue').value)
    toUnit = tempSection.querySelector('#tounit').value
    fromUnit = tempSection.querySelector('#fromunit').value
    let value = inputTemp
    let res = resultSection.querySelector('#res')
    if(!inputTemp || !toUnit || !fromUnit){
        res.textContent = 'Missing fields found...'
    }
    else if(!(tempUnits.includes(toUnit)) || !(tempUnits.includes(fromUnit))){
        res.textContent = 'Invalid Unit Entered...'
    }else{
        if(fromUnit == 'C'){
            if(toUnit == 'K'){
                value = inputTemp + 273
            }else{
                value = inputTemp*(9/5) + 32
            }
        }else if(fromUnit == 'K'){
            if(toUnit == 'C'){
                value = inputTemp - 273
            }else{
                value = (inputTemp-273)*(9/5) + 32
            }
        }else{
            if(toUnit == 'K'){
                value = (inputTemp*(9/5) + 32) - 273
            }else{
                value = (inputTemp - 32)*(5/9)
            }
        }
        res.textContent = `${inputTemp} ${fromUnit} = ${value} ${toUnit}`
    }
    tempSection.className = 'hidden'
    resultSection.className = 'active'
})

resetButton.addEventListener('click',function(e){
    e.preventDefault()
    resultSection.className = 'hidden'
    if(lenSelector.className == 'highlight'){
        lengthSection.className = 'active'
    }
    if(wtSelector.className == 'highlight'){
        weightSection.className = 'active'
    }
    if(tempSelector.className == 'highlight'){
        tempSection.className = 'active'
    }
})

