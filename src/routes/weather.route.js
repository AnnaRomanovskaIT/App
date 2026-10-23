import { Router } from "express";
import validateRequest from "../validation/weather.validation.js";
import weatherService from "../services/weather.service.js";

const router = Router();

router.get("/weather",  validateRequest.validateWeatherRequest, async (req, res, next) => {
        try {
            const latitude = Number(req.query.latitude);
            const longitude = Number(req.query.longitude);

            const weather = await weatherService.getWeather(
                latitude,
                longitude
            );

            res.json(weather);
        } catch (error) {
            next(error);
        }
    }
);

router.get("/locations", validateRequest.validateLocationRequest, async (req, res, next) => {
        try {
            const name = req.query.name;
            const locale = req.query.locale;

            const geolocation = await weatherService.getGeolocation(
                name,
                locale
            );

            res.json(geolocation);
        } catch (error) {
            next(error);
        }
    }
);

export default router;
