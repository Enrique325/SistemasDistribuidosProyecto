async function getWeather() {
    const apiKey = 'da89341e8414fcbf56e17074620471f4'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const city = 'London'; // Replace 'London' with the city you want to get the weather for
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const weatherInfo = `Weather in ${city}: ${data.weather[0].main}, Temperature: ${data.main.temp}°C`;
        document.getElementById('weather').textContent = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').textContent = 'Error fetching weather data. Please try again later.';
    }
}
