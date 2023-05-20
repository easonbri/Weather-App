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
  letDays = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  let day = days[dayindex];

  return "${day} ${hours}:${minutes}";
}

function search(event) {
  event.preventDefalt();
  let apiKey = "24ee9899289258327dcf68f8a9c2019d";
  let city = "boston";
  let apiUrl =
    "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
  console.log(apiUrl);
}

function convertToFahrenheit(event) {
  event.preventDefalt();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefalt();
  let temperatureElement = document.querySelector("#temperatre");
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
