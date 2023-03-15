import { weatherData } from "./dataController.js";

function showWeather(location){
    weatherData(location).then(data => {
    if(typeof data === 'string'){
        let locationError = document.querySelector(`#location + span.error`)
        locationError.textContent = data
        locationError.className = 'error active'
    } else {
        let creditElements = document.querySelectorAll('.credit')
        creditElements.forEach(element => {
            element.classList.remove('creditShow')
        })
        let container = document.querySelector('.container')
        switch(data.weather[0].id){
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
                console.log("no image")
        }
    }
    })
}

export {showWeather}