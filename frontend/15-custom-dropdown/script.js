const toggler = document.getElementById('text-tab')
const options = document.querySelector('#options')
const image = document.getElementById('arrow')
const tab1 = document.getElementById('tab-1')
const tab2 = document.getElementById('tab-2')
const tab3 = document.getElementById('tab-3')
const tab4 = document.getElementById('tab-4')
const tab5 = document.getElementById('tab-5')

const section1 = document.getElementById('section-1')
const section2 = document.getElementById('section-2')
const section3 = document.getElementById('section-3')
const section4 = document.getElementById('section-4')
const section5 = document.getElementById('section-5')


toggler.addEventListener('click',()=>{
    if(options.className != 'options-open'){
        options.className = 'options-open'
        image.className = 'rotated'
    }else if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className = ''
    }
})

function createImage(){
    let image = document.createElement('img')
    image.src = 'check.png'
    return image
}

tab1.addEventListener('click',()=>{
    if(section1.className != 'active'){
        const activeElement = document.querySelector('.active')
        section1.className = 'active'
        activeElement.className = 'inactive'
        const toggletext = document.getElementById('toggle-text')
        toggletext.innerText = 'First Item'
        const check = createImage()
        tab1.appendChild(check)
        const activeTab = document.querySelector('.open')
        console.log(activeTab)
        if(activeTab){
            activeTab.className = 'tabs'
            activeTab.removeChild(activeTab.lastElementChild)
        }    
        tab1.className+=' open'
        console.log(tab1.className)
    }
    if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className =''
    }
})

tab2.addEventListener('click',()=>{
    if(section2.className != 'active'){
        const activeElement = document.querySelector('.active')
        section2.className = 'active'
        activeElement.className = 'inactive'
        const toggletext = document.getElementById('toggle-text')
        toggletext.innerText = 'Second Item'
        const check = createImage()
        tab2.appendChild(check)
        const activeTab = document.querySelector('.open')
        if(activeTab){
            activeTab.className = 'tabs'
            activeTab.removeChild(activeTab.lastElementChild)
        }
        tab2.className+=' open'
    }
    if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className =''
    }
})

tab3.addEventListener('click',()=>{
    if(section3.className != 'active'){
        const activeElement = document.querySelector('.active')
        section3.className = 'active'
        activeElement.className = 'inactive'
        const toggletext = document.getElementById('toggle-text')
        toggletext.innerText = 'Third Item'
        const check = createImage()
        tab3.appendChild(check)
        const activeTab = document.querySelector('.open')
        if(activeTab){
            activeTab.className = 'tabs'
            activeTab.removeChild(activeTab.lastElementChild)
        }
        tab3.className+=' open'
    }
    if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className =''
    }
})

tab4.addEventListener('click',()=>{
    if(section4.className != 'active'){
        const activeElement = document.querySelector('.active')
        section4.className = 'active'
        activeElement.className = 'inactive'
        const toggletext = document.getElementById('toggle-text')
        toggletext.innerText = 'Fourth Item'
        const check = createImage()
        tab4.appendChild(check)
        const activeTab = document.querySelector('.open')
        if(activeTab){
            activeTab.className='tabs'
            activeTab.removeChild(activeTab.lastElementChild)    
        }
        tab4.className+=' open'
    }
    if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className =''
    }
})

tab5.addEventListener('click',()=>{
    if(section5.className != 'active'){
        const activeElement = document.querySelector('.active')
        section5.className = 'active'
        activeElement.className = 'inactive'
        const toggletext = document.getElementById('toggle-text')
        toggletext.innerText = 'Fifth Item'
        const check = createImage()
        tab5.appendChild(check)
        const activeTab = document.querySelector('.open')
        if(activeTab){
            activeTab.className='tabs'
            activeTab.removeChild(activeTab.lastElementChild)
        }
        tab5.className+=' open'
    }
    if(options.className == 'options-open'){
        options.className = 'inactive'
        image.className =''
    }
})