import { showWeather } from "./src/displayController.js";

function locationSearch(location){
    showWeather(location)
}

const weatherAppController = (function(){
    let form = document.querySelector('.inputForm')
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let locationInput = document.querySelector('#location')
        if(locationInput.value !== ''){
            locationSearch(locationInput.value)
        }
    })
        
})();