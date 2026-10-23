async function getMeteoWeather(latitude, longitude) {
        const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?` +
        `latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&hourly=temperature_2m,weather_code` +
        `&forecast_days=1` +
        `&timezone=auto`
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
};