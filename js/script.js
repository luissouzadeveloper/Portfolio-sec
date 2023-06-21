// Menu mobile
function showMenu(){
    let menuMobile = document.querySelector('.menu-mobile')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}

// Carroussel
const containerProj = document.querySelectorAll('.projeto')
const btnPrev = document.querySelector('#prev-button')
const btnNext = document.querySelector('#next-button')

let currentProj = 0

function hideProj(){
    containerProj.forEach(item => item.classList.remove('on'))
}

function showProj(){
    containerProj[currentProj].classList.add('on')
}

function prevProj(){
    hideProj()
    if(currentProj === 0){
        currentProj = containerProj.length - 1
    } else {
        currentProj--
    }
    showProj()
}

function nextProj(){
    hideProj()
    if(currentProj === containerProj.length - 1){
        currentProj = 0
    } else {
        currentProj++
    }
    showProj()
}

btnPrev.addEventListener('click', prevProj)
btnNext.addEventListener('click', nextProj)