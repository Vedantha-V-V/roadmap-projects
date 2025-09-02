const submitbtn = document.getElementById('submit')
const input  = document.getElementById('input')
const tasks = document.getElementById('tasks')
let count = 0

submitbtn.addEventListener('click',()=>{
    if(input.value){
        // Task addition handler
        const newTask = document.createElement('li')
        newTask.innerHTML = `<div id="check" class="checkbox">&nbsp;</div>
                    <p>${input.value}</p>
                    <img id="bin" src="bin.png" alt="bin" width="20px" height="20px"></img>`
        tasks.appendChild(newTask)
        input.
        value = ''
    }
})

tasks.addEventListener('click',(e)=>{
    const task = e.target
    if(task.id.startsWith('bin')){
        // Bin function handler
        const taskNode = task.parentNode
        tasks.removeChild(taskNode)
    }else if(task.id.startsWith('check')){
        // Checkbox function handler
        const taskText = task.parentNode.children[1]
        if(task.style.backgroundColor == 'grey'){
            task.style.backgroundColor = 'white'
            taskText.style.textDecoration = 'none'
            if(count==1){
                const incompleteTask  = tasks.removeChild(task.parentNode)
                tasks.append(incompleteTask)
            }else{
                const taskNum = tasks.childElementCount
                console.log(taskNum)
                const lastCompletedTask = tasks.children[taskNum-count-1]
                console.log(taskNum-count)
                const incompleteTask  = tasks.removeChild(task.parentNode)
                console.log(incompleteTask)
                console.log(lastCompletedTask)
                tasks.insertBefore(incompleteTask,lastCompletedTask)
            }
            count--

        }else{
            count++
            task.style.backgroundColor = 'grey'
            taskText.style.textDecoration = 'line-through'
            const completedTask  = tasks.removeChild(task.parentNode)
            tasks.append(completedTask)
        }
    }
})