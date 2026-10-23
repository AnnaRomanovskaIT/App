import openMeteoClient from "../clients/openMeteo.client.js";

export async function getWeather(latitude, longitude) {
    const data = await openMeteoClient.getMeteoWeather(latitude, longitude);
    return data;
}

export default {
    getWeather,
};