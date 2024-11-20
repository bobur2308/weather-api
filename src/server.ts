  import dotenv from "dotenv";
  import app from "./app";

  dotenv.config();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Weather app running on http://localhost:${PORT}`);
    console.log("Send req like this -> http://localhost:5000/api/weather/Khiva (khiva===cityname)")
  });
