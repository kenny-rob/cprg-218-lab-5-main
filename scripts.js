document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('dropdown');
  const submitButton = document.getElementById('submit-button');
  const weatherResults = document.getElementById('weather-results');

  submitButton.addEventListener('click', async () => {
    const selectedLocation = dropdown.value;

    // Construct the WeatherAPI endpoint URL with the selected location and API key
    const weatherAPIKey = '07c6b86d9e0f42549db230230240604';
    const baseURL = 'http://api.weatherapi.com/v1';
    const weatherAPIEndpoint = `${baseURL}/current.json?key=${weatherAPIKey}&q=${selectedLocation}`;

    try {
      const response = await fetch(weatherAPIEndpoint);
      const data = await response.json();

      // Display weather information in a card
      const { location, current } = data;
      const weatherCard = `
        <li class="card">
          <h3>${location.name}, ${location.country}</h3>
          <p>Temperature: ${current.temp_c}°C</p>
          <p>Weather: ${current.condition.text}</p>
        </li>
      `;

      // Clear previous results and show current weather
      weatherResults.innerHTML = weatherCard;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherResults.innerHTML = '<li class="error-card">Failed to fetch weather data</li>';
    }
  });
});

