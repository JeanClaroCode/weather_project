import "core-js";
import "regenerator-runtime/runtime"

import { getWeatherNeo } from "./weather_service"

console.log("Script loaded");

document.getElementById('searchButton').addEventListener('click', async function() {
    const cityName = document.querySelector('.form-control').value;
    document.querySelector('.form-control').value = ""
    if(!cityName === ''){
        alert('Por favor, insira o nome da cidade.');
        return;
    } 

    try{
        const weatherData = await getWeatherNeo(cityName);
        displayWeatherData(weatherData);
    } catch(error) {
        console.error('Error fetching weather data:', error);
    }
});

function displayWeatherData(weatherData) { 
    const resultDiv = document.getElementById('result');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    resultDiv.innerHTML = `
    <div class="flagAndTitleContent"> 
        <img id="flag" src="https://flagsapi.com/${weatherData.sys.country}/flat/64.png">
        <h2 class="name">${weatherData.name}</h2>
        <h2 id="country">${weatherData.sys.country}</h2>
    </div>
    <p id="temperature">${weatherData.main.temp}°C</p>
    <img class="iconStatus" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather icon">
    <p id="description">${capitalizeFirstLetter(weatherData.weather[0].description)}</p>
`;
    console.log(weatherData.weather[0].description)
}