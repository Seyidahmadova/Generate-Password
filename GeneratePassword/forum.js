const button = document.getElementById('button')
const dropdown = document.getElementById('dropdown')
const content = document.getElementById('content') 

button.addEventListener('click', function(event){
    if(content.style.display==='block'){
        content.style.display='none'
    }
    else{
        content.style.display='block'
    }
})

document.addEventListener('click', function(event){
    if(!content.contains(event.target)){
        content.classList.remove('open')
    }
})
