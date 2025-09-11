const fromSelector = document.getElementById('from-selector')
const toSelector = document.getElementById('to-selector')
const fromOptions = document.getElementById('from-options')
const toOptions = document.getElementById('to-options')
const convertBtn = document.getElementById('convert')
const input = document.getElementById('temperature')
const messageTab = document.getElementById('message')
let fromTemperature = ""
let toTemperature = ""

fromSelector.addEventListener('click',()=>{
    if(fromOptions.className=='options-closed'){
        fromOptions.className='options'
    }else{
        fromOptions.className='options-closed'
    }
})

toSelector.addEventListener('click',()=>{
    if(toOptions.className=='options-closed'){
        toOptions.className='options'
    }else{
        toOptions.className='options-closed'
    }
})

fromOptions.addEventListener('click',(e)=>{
    fromTemperature = e.target.innerText
    fromSelector.innerText = fromTemperature
    fromOptions.className = 'options-closed'
})

toOptions.addEventListener('click',(e)=>{
    toTemperature = e.target.innerText
    toSelector.innerText = toTemperature
    toOptions.className = 'options-closed'
})

convertBtn.addEventListener('mouseover',()=>{
    const temp = input.value
    if(fromTemperature == "" || toTemperature =="" || temp== ""){
        convertBtn.disabled = true
        convertBtn.style.cursor = 'not-allowed'
    }else{
        convertBtn.disabled = false
        convertBtn.style.cursor = 'pointer'
    }
})

convertBtn.addEventListener('click',()=>{
    const temp = input.value
    let newTemp = 0.0
    switch(fromTemperature){
        case 'Celsius':
            if(toTemperature == 'Fahrenheit'){
                newTemp = (temp*(9/5)) + 32
            }else if(toTemperature = 'Kelvin'){
                newTemp = temp + 273.15
            }else{
                newTemp = parseFloat(temp)
            }
            break
        case 'Fahrenheit':
            if(toTemperature == 'Celsius'){
                newTemp = (temp-32)*(5/9)
            }else if(toTemperature == 'Kelvin'){
                newTemp = (temp-32)*(5/9) + 273.15
            }else{
                newTemp = parseFloat(temp)
            }
            break
        case 'Kelvin':
            if(toTemperature == 'Celsius'){
                newTemp = temp - 273.15
            }else if(toTemperature == 'Fahrenheit'){
                newTemp = (temp-273.15)*(9/5) + 32
            }else{
                newTemp = parseFloat(temp)
            }
            break
        default:
            console.log("Invalid Input")
    }
    const message = `${temp} ${fromTemperature} is ${newTemp.toFixed(1)} ${toTemperature}`
    messageTab.textContent = message
})