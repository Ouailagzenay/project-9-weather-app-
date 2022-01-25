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
    
// function onClick(){
    

// var city = document.getElementById('inputuesr').value
//     var url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric";

// fetch (url)
//     .then(function(reponse) {

// return reponse.json()

// })

// .then(function(data){

// console.log(data),



// document.getElementById('name').textContent = data.name,

// document.getElementById('Cloudy').textContent = data.clouds.all,
// document.getElementById('icon').src = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png",
// document.getElementById('Humidity').textContent = data.main.humidity,
// document.getElementById('wind').textContent = data.wind.speed,
// document.getElementById('temp').textContent = data.main.temp,
// document.getElementById('weather').textContent = data.weather[0].description,
// document.getElementById('idCtiy').textContent = data.id



// })}
// //date
// let dateToday =document.getElementById("date");
// let today = new Date();
// let day =`${today.getDate() < 10?"0" :""}${today.getDate()}`
// let month =`${(today.getMonth()+1) < 10?"0" :""}${today.getMonth()+1}`
// let year =today.getFullYear();
// dateToday.textContent =`${day}/${month}/${year}    `
// //time 
// let timeToday =document.getElementById("time");
// let time = new Date()
// let h = `${time.getHours() < 10?"0" :""}${time.getHours()}`
// let m = `${time.getMinutes() < 10?"0" :""}${time.getMinutes()}`
// timeToday.textContent =`${h}:${m}`