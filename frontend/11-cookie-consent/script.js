const btn = document.getElementById('consent')
const cookie = document.querySelector('.cookie')

btn.addEventListener('click',(e)=>{
        e.preventDefault()
        cookie.style.visibility = "hidden"
    }
)