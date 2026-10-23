import { ExternalApiError } from "../errors/external-api.error.js";
import { config } from "../config/config.js";

async function getMeteoWeather(latitude, longitude) {
    const response = await fetch(
        `${config.openMeteo.weatherUrl}?` +
            `latitude=${latitude}` +
            `&longitude=${longitude}` +
            "&hourly=temperature_2m,weather_code" +
            "&forecast_days=1" +
            "&timezone=auto"
    );

    if (!response.ok) {
        throw new ExternalApiError(
            "Open-Meteo request failed",
            response.status
        );
    }

    return response.json();
}

async function getGeolocation(cityName, locale = "en") {
    const response = await fetch(
        `${config.openMeteo.geocodingUrl}?` +
            `name=${encodeURIComponent(cityName)}` +
            "&count=10" +
            `&language=${locale}` +
            "&format=json"
    );

    if (!response.ok) {
        throw new ExternalApiError(
            "Open-Meteo request failed",
            response.status
        );
    }

    return response.json();
}

export default {
    getMeteoWeather,
    getGeolocation,
};
