function onClick(){
    

var city = document.getElementById('inputuesr').value
    var url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b&units=metric";

fetch (url)
    .then(function(reponse) {

return reponse.json()

})

.then(function(data){

console.log(data),



document.getElementById('name').textContent = data.name,

document.getElementById('Cloudy').textContent = data.clouds.all,
document.getElementById('icon').src = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png",
document.getElementById('Humidity').textContent = data.main.humidity,
document.getElementById('wind').textContent = data.wind.speed,
document.getElementById('temp').textContent = data.main.temp,
document.getElementById('weather').textContent = data.weather[0].description,
document.getElementById('idCtiy').textContent = data.id



})}