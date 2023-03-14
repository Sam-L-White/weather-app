import { getWeather } from "./apiController.js";

async function weatherData(location){

    let weatherData = await getWeather(location)

    if(typeof weatherData === 'object'){
        let main = weatherData.main
        let weather = weatherData.weather
        let wind = weatherData.wind
        return {main, weather, wind}
    } else {
        return weatherData
    }
    
}

export {weatherData}