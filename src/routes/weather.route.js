import { Router } from "express";
import validateWeatherRequest from "../validation/weather.validation.js";
import { getWeather } from "../services/weather.service.js";

const router = Router();

router.get("/weather", validateWeatherRequest, async (req, res, next) => {
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
