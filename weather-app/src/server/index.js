const express = require("express");

const app = express();
const port = 3000;

app.get("/api/weather", async (req, res) => {
    const latitude = Number(req.query.latitude);
    const longitude = Number(req.query.longitude);

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    );

    const data = await response.json();

    res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});