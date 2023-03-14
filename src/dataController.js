import { getWeather } from "./apiController.js";

async function weatherData(location){

    let weatherData = await getWeather(location)
    let main = weatherData.main
    let weather = weatherData.weather
    let wind = weatherData.wind
    return {main, weather, wind}
}

export {weatherData}