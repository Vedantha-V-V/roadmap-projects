const q1 = document.querySelector('#question-1')
const tab1 = document.querySelector('#tab-1')
const arrow1 = document.querySelector('#arrow-1')
const q2 = document.querySelector('#question-2')
const tab2 = document.querySelector('#tab-2')
const arrow2 = document.querySelector('#arrow-2')
const q3 = document.querySelector('#question-3')
const tab3 = document.querySelector('#tab-3')
const arrow3 = document.querySelector('#arrow-3')
const q4 = document.querySelector('#question-4')
const tab4 = document.querySelector('#tab-4')
const arrow4 = document.querySelector('#arrow-4')
const q5 = document.querySelector('#question-5')
const tab5 = document.querySelector('#tab-5')
const arrow5 = document.querySelector('#arrow-5')


q1.addEventListener('click',(e)=>{
    if(tab1.className == 'active-tab'){
        tab1.className = 'tab'
        arrow1.className=''
    }else{
        tab1.className='active-tab'
        arrow1.className='rotated'
    }
})

q2.addEventListener('click',(e)=>{
    if(tab2.className == 'active-tab'){
        tab2.className = 'tab'
        arrow2.className=''
    }else{
        tab2.className='active-tab'
        arrow2.className='rotated'
    }
})

q3.addEventListener('click',(e)=>{
    if(tab3.className == 'active-tab'){
        tab3.className = 'tab'
        arrow3.className=''
    }else{
        tab3.className='active-tab'
        arrow3.className='rotated'
    }
})

q4.addEventListener('click',(e)=>{
    if(tab4.className == 'active-tab'){
        tab4.className = 'tab'
        arrow4.className=''
    }else{
        tab4.className='active-tab'
        arrow4.className='rotated'
    }
})

q5.addEventListener('click',(e)=>{
    if(tab5.className == 'active-tab'){
        tab5.className = 'tab'
        arrow5.className=''
    }else{
        tab5.className='active-tab'
        arrow5.className='rotated'
    }
})