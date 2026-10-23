import openMeteoClient from "../clients/openMeteo.client.js";
import { mapOpenMeteoToWeather } from "../models/weather.mapper.js";

export async function getWeather(latitude, longitude) {
    const data = await openMeteoClient.getMeteoWeather(latitude, longitude);
    return mapOpenMeteoToWeather(data, "Wroclaw");
}

export default {
    getWeather,
};
