const button = document.getElementById('button')
const input = document.getElementById('date')
const selector = document.querySelector('#mydiv')
const msgContainer = document.querySelector('#show_age')
const DateTime = luxon.DateTime

document.addEventListener('DOMContentLoaded',()=>{
  const picker = datepicker(input, {
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString()
      input.value = value
    }
  })
})

button.addEventListener('click',(e)=>{
  e.preventDefault()
  var message = ""
  if(!input.value){
    message = "No Date Entered"
  }
  else{
    const date = new Date(input.value)
    if(isNaN(date.getTime())){
      message = "Invalid Date Entered"
    }else{
      const dateObject = DateTime.fromISO(date.toISOString())
      const dateNow = DateTime.fromISO(DateTime.now())
      const age = dateNow.diff(dateObject, ['years', 'months', 'days']);
      if(age.years<0 || age.months<0 || age.days <0){
        message = "Invalid Date Entered"
      }else{
        message = `You are ${age.years} years ${age.months} months old`
      }
    }
  }
  msgContainer.innerText = message
})