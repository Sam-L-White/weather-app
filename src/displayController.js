import { weatherData } from "./dataController.js";

function showWeather(location){
    weatherData(location).then(data => {
    console.log(data)
    })
}

export {showWeather}