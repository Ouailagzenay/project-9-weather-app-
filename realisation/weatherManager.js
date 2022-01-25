class WeatherManager {
    #_currentForecast;

    get currentForecast() {
        return this.#_currentForecast
    }

    set currentForecast(value) {
        this.#_currentForecast = value
    }

    async fetchForecast(url) {

        var response = await fetch(url)
        var data = await response.json()
        // handle the response

        var weather = new Weather()
        weather.city = data.name
        weather.description = data.weather[0].main
        weather.iconCode = data.weather[0].icon
        weather.temp = data.main.temp
        weather.country = data.main.country
        weather.humidity = data.main.humidity
        weather.wind =  data.wind.speed
        weather.cloudy = data.clouds.all
        this.#_currentForecast = weather

    }
}