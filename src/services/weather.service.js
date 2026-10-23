async function getWeather(latitude, longitude) {
    const data = await openMeteoClient.getWeather(latitude, longitude);
    return data;
}

export default {
    getWeather,
};