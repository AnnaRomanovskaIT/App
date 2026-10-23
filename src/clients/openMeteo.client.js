async function getWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);

    if (!response.ok) {
        throw new Error("Open-Meteo request failed");
    }

    return response.json();
}

export default {
    getWeather,
};