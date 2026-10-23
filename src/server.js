import express from "express";
import weatherRouter from "./routes/weather.routes";

const app = express();
const port = 3000;

app.use("/api", weatherRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});