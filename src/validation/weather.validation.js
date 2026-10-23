function validateWeatherRequest(req, res, next) {
    const latitude = Number(req.query.latitude);
    const longitude = Number(req.query.longitude);

    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
        return res.status(400).json({
            error: "Invalid coordinates",
        });
    }

    next();
}

export default validateWeatherRequest;
