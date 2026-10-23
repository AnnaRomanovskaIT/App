import { Router } from "express";
import validateWeatherRequest from "../validation/weather.validation";

const router = Router();

router.get("/weather", validateWeatherRequest, async (req, res) => {
    try {
    const latitude = Number(req.query.latitude);
    const longitude = Number(req.query.longitude);

    const weather = await getWeather(latitude, longitude);

    res.json(weather);
    } catch (error) {
        next(error);
    }
});

export default router;