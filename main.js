const apiKey = 'f405a6b3426dc26630ae7c0874e5eccb';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
  const location = searchInput.value.trim();
  if (location !== '') {
    searchWeather(location);
  }
});

function searchWeather(location) {
  weatherInfo.innerText = '';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  // Fetch weather data from API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const temperature = Math.round(data.main.temp - 273.15);
        const weatherDescription = data.weather[0].description;
        const weatherOutput = `Temperature: ${temperature}°C, Description: ${weatherDescription}`;
        weatherInfo.innerText = weatherOutput;
      } else {
        weatherInfo.innerText = 'Unable to fetch weather information.';
      }
    })
    .catch(error => {
      weatherInfo.innerText = 'An error occurred while fetching weather information.';
    });
}
