const lenSelector = document.getElementById('length');
const wtSelector = document.getElementById('weight');
const tempSelector = document.getElementById('temperature');
const lengthSection = document.getElementById('length-section');
const weightSection = document.getElementById('weight-section');
const tempSection = document.getElementById('temperature-section');
const convertBtn = document.getElementById('convert-btn')

lenSelector.addEventListener('click',function(e){
    e.preventDefault();
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

convertBtn.addEventListener('click',function(e){
    if(lenSelector.className == 'highlight'){
        inputLength = lengthSection.querySelector('#ipvalue')
        toUnit = lengthSection.querySelector('#tounit')
        fromUnit = lengthSection.querySelector('#fromunit')
        console.log(inputLength.value)
    }
    if(wtSelector.className == 'highlight'){
        inputWeight = weightSection.querySelector('#ipvalue')
        toUnit = weightSection.querySelector('#tounit')
        fromUnit = weightSection.querySelector('#fromunit')
    }
    if(tempSelector.className == 'highlight'){
        inputTemp = tempSection.querySelector('#ipvalue')
        toUnit = tempSection.querySelector('#tounit')
        fromUnit = tempSection.querySelector('#fromunit')
    }
})

