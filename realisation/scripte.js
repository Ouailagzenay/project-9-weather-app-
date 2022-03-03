var city;

var key = "0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric";

async function onClick() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined




}


function display(currentForecast) {
    document.getElementById('city').textContent = currentForecast.city
    document.getElementById('temp').textContent = currentForecast.temp + "" + "°C"
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + currentForecast.iconCode + ".png";
    document.getElementById("Humidity").textContent = currentForecast.humidity+ "" + "%"
    document.getElementById("wind").textContent = currentForecast.wind + "" + "km/h"
    document.getElementById('Cloudy').textContent = currentForecast.cloudy + "" + "%"
    document.getElementById('weather').textContent = currentForecast.description
    




}
    
