import api from "../../../lib/request/api-client";
import { env } from "../../../config/env";

const future_days = 10

export const getWeatherForecast = async (location) => {
  return api.get(`/forecast.json?key=${env.VITE_WEATHER_API_KEY}&q=${location}&days=${future_days}`);
} 