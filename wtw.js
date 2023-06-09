function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function getInfo(api) {
  let apiKey = "f4df316dfa42f0bcf01ddct7223o4aca";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=boston&key=f4df316dfa42f0bcf01ddct7223o4aca&units=metric`;
}

axios.get(apiUrl).then(displayTemperature);

function formatDate(date) {
  let hours = date.getHours();

  if (hours < 10) {
    hours = "0${hours}";
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0${minutes}";
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", search);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
console.log(new Date());
dateElement.innerHTML = formatDate(currentTime);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

const call = document.querySelector(".call-api");
