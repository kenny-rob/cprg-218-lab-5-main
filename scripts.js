document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('dropdown');
  const submitButton = document.getElementById('submit-button');
  const weatherResults = document.getElementById('weather-results');

  submitButton.addEventListener('click', async () => {
    const selectedLocation = dropdown.value;

    // Construct the WeatherStack API endpoint URL with the selected location
    const weatherStackEndpoint = selectedLocation;

    try {
      const response = await fetch(weatherStackEndpoint);
      const data = await response.json();

      // Check if the 'location' and 'current' properties exist in the data object
      if (data && data.location && data.current) {
        // Display weather information in a card
        const { location, current } = data;
        const weatherCard = `
          <li class="card">
            <h3>${location.name}, ${location.country}</h3>
            <p>Temperature: ${current.temperature}°C</p>
            <p>Weather: ${current.weather_descriptions[0]}</p>
          </li>
        `;

        // Clear previous results and show current weather
        weatherResults.innerHTML = weatherCard;
      } else {
        console.error('Invalid data format received from WeatherStack API:', data);
        weatherResults.innerHTML = '<li class="error-card">Invalid weather data</li>';
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherResults.innerHTML = '<li class="error-card">Failed to fetch weather data</li>';
    }
  });
});

