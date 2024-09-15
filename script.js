const apiKey = '3e585dd377e43b970ad85f98e73e5478';  // OpenWeatherMap API kaliti
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  } else {
    showErrorMessage('Iltimos, shahar nomini kiriting.');
  }
});

function fetchWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        displayWeatherData(data);
        errorMessage.textContent = '';
      } else {
        showErrorMessage('Shahar topilmadi. Iltimos, qaytadan urinib ko‘ring.');
      }
    })
    .catch(error => {
      showErrorMessage('Maʼlumot olishning imkoni yoʻq.');
      console.error(error);
    });
}

function displayWeatherData(data) {
  const temp = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const city = data.name;
  const country = data.sys.country;

  weatherInfo.innerHTML = `
    <h2>${city}, ${country}</h2>
    <p>Harorat: ${temp}°C</p>
    <p>Ob-havo: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
  `;
}

function showErrorMessage(message) {
  errorMessage.textContent = message;
}

const weatherDescriptionsUzbek = {
    "clear sky": "Ochiq osmon",
    "few clouds": "Biroz bulutli",
    "scattered clouds": "Tarqoq bulutlar",
    "broken clouds": "Qisman bulutli",
    "shower rain": "Yomg'ir yog'moqda",
    "rain": "Yomg'ir",
    "thunderstorm": "Momoqaldiroq",
    "snow": "Qor",
    "mist": "Tuman",
  };
  


