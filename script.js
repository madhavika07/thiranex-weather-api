const weatherCodeMap = {
    0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
    45: "Foggy", 61: "Slight Rain", 63: "Moderate Rain", 65: "Heavy Rain",
    95: "Thunderstorm"
};

const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const statusMessage = document.getElementById('status-message');
const weatherCard = document.getElementById('weather-card');

const displayCity = document.getElementById('display-city');
const displayTemp = document.getElementById('display-temp');
const displayHumidity = document.getElementById('display-humidity');
const displayWind = document.getElementById('display-wind');
const displayCondition = document.getElementById('display-condition');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    statusMessage.textContent = 'Loading...';
    statusMessage.className = 'status-message loading';
    statusMessage.classList.remove('hidden');
    weatherCard.classList.add('hidden');

    try {
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en`);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error(`City "${city}" not found.`);
        }

        const { latitude, longitude, name } = geoData.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
        const weatherData = await weatherResponse.json();
        
        displayCity.textContent = name;
        displayTemp.textContent = Math.round(weatherData.current.temperature_2m);
        displayHumidity.textContent = `${weatherData.current.relative_humidity_2m}%`;
        displayWind.textContent = `${weatherData.current.wind_speed_10m} km/h`;
        displayCondition.textContent = weatherCodeMap[weatherData.current.weather_code] || "Conditions Unknown";

        statusMessage.classList.add('hidden');
        weatherCard.classList.remove('hidden');

    } catch (error) {
        statusMessage.textContent = error.message;
        statusMessage.className = 'status-message error';
    }
});
