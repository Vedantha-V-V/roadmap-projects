const tab1 = document.getElementById('tab1')
const tab2 = document.getElementById('tab2')
const tab3 = document.getElementById('tab3')
const tab4 = document.getElementById('tab4')

tab1.addEventListener('click',function(e){
    e.preventDefault()
    const prevActive = document.querySelector('.active')
    if(prevActive!=tab1){
        tab1.className="active" 
        prevActive.className = ""
    }
    const tabSection = document.getElementById('tab1-section')
    const tabActive = document.querySelector('.tab-active')
    if(tabSection!=tabActive){
        tabSection.className = "tab-active"
        tabActive.className = "tab"  
    }    
})

tab2.addEventListener('click',function(e){
    e.preventDefault()
    const prevActive = document.querySelector('.active')
    if(prevActive!=tab2){
        tab2.className="active" 
        prevActive.className = ""
    }
    const tabSection = document.getElementById('tab2-section')
    const tabActive = document.querySelector('.tab-active')
    if(tabSection!=tabActive){
        tabSection.className = "tab-active"
        tabActive.className = "tab"   
    }    
})

tab3.addEventListener('click',function(e){
    e.preventDefault()
    const prevActive = document.querySelector('.active')
    if(prevActive!=tab3){
        tab3.className="active" 
        prevActive.className = ""
    }
    const tabSection = document.getElementById('tab3-section')
    const tabActive = document.querySelector('.tab-active')
    if(tabSection!=tabActive){
        tabSection.className = "tab-active"
        tabActive.className = "tab"   
    } 
})

tab4.addEventListener('click',function(e){
    e.preventDefault()
    const prevActive = document.querySelector('.active')
    if(prevActive!=tab4){
        tab4.className="active" 
        prevActive.className = ""
    }
    const tabSection = document.getElementById('tab4-section')
    const tabActive = document.querySelector('.tab-active')
    if(tabSection!=tabActive){
        tabSection.className = "tab-active"
        tabActive.className = "tab"   
    }     
})