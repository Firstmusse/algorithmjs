let counter = 1
const cube1 = document.querySelector('.cube-1')
const cube2 = document.querySelector('.cube-2')


document.getElementById('btn').onclick = function() {
   if(counter <= 20){
    const newBtn = document.createElement('button')
    newBtn.classList.add('btn-cube')
    newBtn.onclick = transfer
    newBtn.textContent = counter
    cube1.append(newBtn)
    counter++
   }
   
}

function transfer(event) {
    
    if(event.target.parentElement == cube1){
        cube1.removeChild(event.target)
        cube2.append(event.target) 
    }else{
        cube2.removeChild(event.target)
        cube1.append(event.target) 
    }
    
}

function cubeSort() {
    const arr = [...cube2.children]
    arr.sort( (elem, next) =>{
        return elem.innerText - next.innerText 
    });
    cube2.append(...arr)
}


function cubeRefresh(){
    const arr = [...cube2.children]

    arr.sort( (elem, next) =>{
        return elem.innerText - next.innerText 
    });

    cube1.append(...arr)

    let copyCube = [...cube1.children]
        copyCube.sort( (elem, next) =>{
        return elem.innerText - next.innerText 
    });
    cube1.append(...copyCube)
}








//parentElement: div.cube-2