import express from "express";
import weatherRoutes from "./routes/weatherRoutes";

const app = express();

app.use(express.json()); // Parse JSON requests
app.use("/api/weather", weatherRoutes); // Register weather routes

export default app;
