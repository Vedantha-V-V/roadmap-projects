const input = document.getElementById('input')
const counter = document.getElementById('counter-container')

input.addEventListener('input',(e)=>{
    e.preventDefault()
    var inputVal = e.target.value
    const len = inputVal.length
    const count = document.getElementById('count')
    count.innerText = `${len}`
    if(len>=250){
        input.style.borderColor = 'red'
        counter.style.color = 'red'
        e.target.style.color = 'red'
    }else{
        input.style.borderColor = 'black'
        counter.style.color = 'black'
        e.target.style.color = 'black'
    }
})