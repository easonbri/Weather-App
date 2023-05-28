function format(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0${hours}";
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0${minutes}";
  }
  let dayindex = date.getDate();
  let Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayindex];

  return "${day} ${hours}:${minutes}";
}

function search(event) {
  event.preventDefalt();
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let city = "boston";
  let apiUrl = "https://www.shecodes.io/learn/open_weather_api_keys";
}
function convertToFahrenheit(event) {
  event.preventDefalt();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefalt();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formateDate(currentTime);

let searchForm = document.querySelector("search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
