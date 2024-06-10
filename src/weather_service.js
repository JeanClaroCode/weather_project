export async function getWeatherNeo(city) {
    const apiKey = `2fe1d5e932ab5fc807517b74d82d5189`
    const cityName = city
    const celsiusMetric = "units=metric" 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&${celsiusMetric}&lang=pt_br`
    try { 
        const response = await fetch(URL)
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const weatherData = await response.json();
        return weatherData
    } catch(error){
        console.log(`Fetch erro: ${error}`)
        throw error
    }

}

/* export async function getCountryFlagNeo(weatherData) {
    const URL = ``;

    const flagContainer = document.getElementById("flag-container");

    try { 
        const response = await fetch(URL)
        if(!response.ok) {
            throw new Error('Erro ao carregar a bandeira');
        }
        let returnResponse = await response.blob();
        const img = document.createElement('img')
        img.src = URL.createObjectURL(returnResponse);
        flagContainer.appendChild(img)
    } 
    catch(error){
        console.log(`Fetch erro: ${error}`)
        throw error
    }
} */