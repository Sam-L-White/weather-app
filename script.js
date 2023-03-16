import { showWeather } from "./src/displayController.js";

function locationSearch(location){
    showWeather(location)
}

const weatherAppController = (function(){
    let container = document.querySelector('.container')
    let mainCredit = document.querySelector('.main-credit')
    container.style.backgroundImage = "url(./images/space.jpg)"
    mainCredit.classList.add('creditShow')
    let form = document.querySelector('.inputForm')
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let locationInput = document.querySelector('#location')
        if(locationInput.value !== ''){
            locationSearch(locationInput.value)
        }
    })
        
})();