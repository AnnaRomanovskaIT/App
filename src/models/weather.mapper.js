import { Weather, Location, Forecast } from "./weather.model.js";

export function mapOpenMeteoToWeather(data, locationName) {
    const forecast = data.hourly.time.map(
        (time, index) =>
            new Forecast({
                time,
                temperature: data.hourly.temperature_2m[index],
                weatherCode: data.hourly.weather_code[index],
            })
    );

    return new Weather({
        id: crypto.randomUUID(),
        date: data.hourly.time[0].split("T")[0],
        location: new Location({
            name: locationName,
            latitude: data.latitude,
            longitude: data.longitude,
        }),
        forecast,
        createdAt: new Date().toISOString(),
    });
}
