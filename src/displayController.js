import { weatherData } from "./dataController.js";

function backgroundControl(weatherId){
    let creditElements = document.querySelectorAll('.credit')
        creditElements.forEach(element => {
            element.classList.remove('creditShow')
        })
        let container = document.querySelector('.container')
        switch(weatherId){
            case 200:
            case 201:
            case 202:
            case 210:
            case 211:
            case 212:
            case 221:
            case 230:
            case 231:
            case 232:
                let lightningCredit = document.querySelector('.lightning-credit')
                container.style.backgroundImage = "url(./images/lightning.jpg)"
                lightningCredit.classList.add('creditShow')
                break;
            case 300:
            case 301:
            case 302:
            case 310:
            case 311:
            case 312:
            case 313:
            case 314:
            case 321:
                let drizzleCredit = document.querySelector('.drizzle-credit')
                container.style.backgroundImage = "url(./images/drizzle.jpg)"
                drizzleCredit.classList.add('creditShow')
                break;
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
            case 511:
            case 520:
            case 521:
            case 522:
            case 531:
                let rainCredit = document.querySelector('.rain-credit')
                container.style.backgroundImage = "url(./images/rain.jpg)"
                rainCredit.classList.add('creditShow')
                break;
            case 600:
            case 601:
            case 602:
            case 611:
            case 612:
            case 613:
            case 615:
            case 616:
            case 620:
            case 621:
            case 622:
                let snowCredit = document.querySelector('.snow-credit')
                container.style.backgroundImage = "url(./images/snow.jpg)"
                snowCredit.classList.add('creditShow')
                break;
            case 800:
                let clearCredit = document.querySelector('.clear-credit')
                container.style.backgroundImage = "url(./images/clear.jpg)"
                clearCredit.classList.add('creditShow')
                break;
            case 801:
            case 802:
                let cloudscatteredCredit = document.querySelector('.cloudscattered-credit')
                container.style.backgroundImage = "url(./images/cloudscattered.jpg)"
                cloudscatteredCredit.classList.add('creditShow')
                break;
            case 803:
            case 804:
                let cloudyCredit = document.querySelector('.cloudy-credit')
                container.style.backgroundImage = "url(./images/cloudy.jpg)"
                cloudyCredit.classList.add('creditShow')
                break;
            default:
                let mainCredit = document.querySelector('.main-credit')
                container.style.backgroundImage = "url(./images/space.jpg)"
                container.classList.add('backgroundShow')
                mainCredit.classList.add('creditShow')
        }
}

function strToUpperCase(string){
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

function weatherControl(weather, wind, main){
    let dataDisplayContainer = document.querySelector('.dataDisplay')
    let weatherDisplay = document.querySelector('.weatherTitle')
    weatherDisplay.textContent = strToUpperCase(weather['description'])
    let pressureDisplay = document.querySelector('#pressureData p')
    pressureDisplay.textContent = `${main['pressure']}hPa`;
    let humidityDisplay = document.querySelector('#humidityData p')
    humidityDisplay.textContent = `${main['humidity']}%`;
    let tempDisplay = document.querySelector('#tempData p')
    tempDisplay.textContent = `${main['temp']}°C`;
    let feelsLikeDisplay = document.querySelector('#feelsLikeData p')
    feelsLikeDisplay.textContent = `${main['feels_like']}°C`;
    let windDisplay = document.querySelector('#windData p')
    windDisplay.textContent = `${wind['speed']}m/s`
    dataDisplayContainer.classList.remove('hide')
}

function showWeather(location){
    weatherData(location).then(data => {
        let locationError = document.querySelector(`.error`)
    if(typeof data === 'string'){
        console.log(locationError)
        locationError.textContent = data
        locationError.classList.add('active')
        locationError.classList.remove('hide')
    } else {
        locationError.classList.remove('active')
        locationError.classList.add('hide')
        let locationTitle = document.querySelector('.locationTitle')
        locationTitle.textContent = location
        backgroundControl(data.weather[0].id)
        weatherControl(data.weather[0], data.wind, data.main)
    }
    })
}

export {showWeather}