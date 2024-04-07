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

    // Handle change event on select dropdown
document.getElementById('dropdown').addEventListener('change', function() {
  // Get selected option value
  var selectedOption = this.value;
  console.log('Selected option:', selectedOption);
});
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown');

  // Function to update background image based on selected option
  function updateBackgroundImage() {
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    const selectedImage = selectedOption.getAttribute('data-image');
    
    // Update the background image of the dropdown
    dropdown.style.backgroundImage = `url('${selectedImage}')`;
    dropdown.style.backgroundSize = 'cover'; // Adjust background size if needed
  }

  // Initial call to set default background image on page load
  updateBackgroundImage();

  // Listen for change event on the dropdown
  dropdown.addEventListener('change', updateBackgroundImage);
});
  });
  
});

