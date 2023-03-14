import { weatherData } from "./dataController.js";

function showWeather(location){
    weatherData(location).then(data => {
    if(typeof data === 'string'){
        let locationError = document.querySelector(`#location + span.error`)
        locationError.textContent = data
        locationError.className = 'error active'
    }
    })
}

export {showWeather}