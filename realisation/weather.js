class Weather {
    #_city;
    #_humidity;
    #_temp;
    #_iconCode;
    #_description;
    #_wind
    #_cloudy

    get city(){
        return this.#_city;
    }

    set city(value){
        this.#_city = value;
    }
    get cloudy(){
        return this.#_cloudy;
    }

    set cloudy(value){
        this.#_cloudy = value;
    }
    get wind(){
        return this.#_wind;
    }

    set wind(value){
        this.#_wind = value;
    }

    get humidity() {
        return this.#_humidity
    }
    set humidity(value) {
        this.#_humidity = value
    }

    get temp() {
        return this.#_temp;
    }

    set temp(value) {
        this.#_temp = value
    }

    get iconCode() {
        return this.#_iconCode;
    }

    set iconCode(value) {
        this.#_iconCode = value
    }

    get description() {
        return this.#_description
    }

    set description(value){
        this.#_description = value
    }
}