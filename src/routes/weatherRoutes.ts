import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const WEATHER_API_URL = process.env.WEATHER_API_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// Route: Get weather by city
router.get("/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(`${WEATHER_API_URL}`, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: "metric", 
      },
    });

    const data = response.data;
    res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
    });
    // res.status(200).json(data)
  } catch (error:any) {
    if (error.response?.status === 404) {
      res.status(404).json({ message: "City not found" });
    } else {
      console.log(error)
      res.status(500).json({ message: "Error fetching weather data" });
    }
  }
});

export default router;
