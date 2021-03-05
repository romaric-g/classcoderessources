const btnSommaire = document.getElementById('btnSommaire')
const bg = document.getElementById('bgNoir')
const openIcon = document.getElementById('openSommaire')
const closeIcon = document.getElementById('closeSommaire')
const container = document.getElementById('ContainerSommaire')
let deplie = false
btnSommaire.addEventListener('click', ()=>{
    if(deplie){
        deplie = false
        bg.style.display = "none"
        container.style.display = "none"
        closeIcon.style.display = "none"
        openIcon.style.display = "block"
    }else{
        deplie = true
        bg.style.display = "block"
        container.style.display = "block"
        openIcon.style.display = "none"
        closeIcon.style.display = "block"
    }
})