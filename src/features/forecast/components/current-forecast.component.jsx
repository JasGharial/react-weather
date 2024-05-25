// Utilities
import { getTrimmedConditionIcon } from "../../../lib/utilities/image.utils";

// Contexts
import { useContext } from "react";
import { ForecastContext } from "../../../contexts/forecast.context";

const CurrentForecast = () => {
  const { forecast } = useContext(ForecastContext);
  const { current, location } = forecast;

  const conditionIcon = getTrimmedConditionIcon(current?.condition?.icon)
  return (
    <div className="current-forecast-container flex justify-between items-center">
      <div className="current-forecast-icon-container">
        <img width={"100px"} src={conditionIcon} alt={current?.condition?.text} />
      </div>
      <div className="current-region">
        <p className="text-2xl">{location?.name}</p>
        <p>{location?.region}</p>
      </div>
      <div className="current-temperature">
        <span className="text-2xl">{current?.temp_c}&nbsp;</span>
        <span className="text-2xl">&#176;</span>
        <p>Temperature</p>
      </div>
      <div className="current-humidity">
        <span className="text-2xl">{current?.humidity}&nbsp;</span>
        <span>&#37;</span>
        <p>Humidity</p>
      </div>
      <div className="current-wind-speed">
        <span className="text-2xl">{current?.wind_kph}&nbsp;</span>
        <span>km/h</span>
        <div>Wind Speed</div>
      </div>
    </div>
  )
}

export default CurrentForecast;