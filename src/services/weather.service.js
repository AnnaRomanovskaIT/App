import openMeteoClient from "../clients/openMeteo.client.js";
import { mapOpenMeteoToWeather } from "../models/weather/weather.mapper.js";
import { mapGeolocationData } from "../models/geolocation/geolocation.mapper.js";

export async function getWeather(latitude, longitude) {
    const data = await openMeteoClient.getMeteoWeather(latitude, longitude);
    return mapOpenMeteoToWeather(data, "Wroclaw");
}

export async function getGeolocation(name, locale = "en") {
    const data = await openMeteoClient.getGeolocation(name, locale);
    return mapGeolocationData(data);
}

export default {
    getWeather,
    getGeolocation,
};
