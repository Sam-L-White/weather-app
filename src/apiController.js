async function getWeather(location){
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c08d09c2e4ca8807810764c1e77b3bd4`, {mode: 'cors'})
    if(response.status == 200){
        let weatherData = await response.json()
        return(weatherData)
    } else {
        return(response.status + ' ' + response.statusText)
    }   
}
    

export{getWeather}