import dotenv from 'dotenv';
dotenv.config();

export async function getWeatherNeo(city) {
    const apiKey = process.env.API_KEY;
    const cityName = city;
    const celsiusMetric = "units=metric";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&${celsiusMetric}&lang=pt_br`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(`Fetch erro: ${error}`);
        throw error;
    }
}
