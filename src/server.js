import express from "express";
import WeatherRouter from "./routes/weather.route.js";

const app = express();
const port = 3000;

app.use("/api", WeatherRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
