// Contexts and Dependencies
import { useContext, useEffect } from "react";
import { LocationContext } from "../../../contexts/location.context";
import { ForecastContext } from "../../../contexts/forecast.context";

// Components
import CurrentForecast from "./current-forecast.component";

// APIs
import { getWeatherForecast } from "../api/get-forecast";

const Forecast = () => {
  const { location } = useContext(LocationContext);
  const { setForecast } = useContext(ForecastContext);

  useEffect(() => {
    const getWeatherForecastAPI = async () => {
    await getWeatherForecast(location)
    .then((response) => setForecast(response))
    }
    getWeatherForecastAPI();
  }, [])

  return (
    <div className="forecast-container container">
      Forecast Component
      <CurrentForecast />
    </div>
  )
}

export default Forecast;
