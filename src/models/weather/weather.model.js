export class Weather {
    constructor({ id, date, location, forecast, createdAt }) {
        this.id = id;
        this.date = date;
        this.location = location;
        this.forecast = forecast;
        this.createdAt = createdAt;
    }
}

export class Location {
    constructor({ name, latitude, longitude }) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export class Forecast {
    constructor({ time, temperature, weatherCode }) {
        this.time = time;
        this.temperature = temperature;
        this.weatherCode = weatherCode;
    }
}
