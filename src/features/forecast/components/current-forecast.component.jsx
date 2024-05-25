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
    <div className="current-forecast-container flex justify-between">
      <img src={conditionIcon} alt={current?.condition?.text} />
      <span>
        <h2>{location?.name}</h2>
        <p>{location?.region}</p>
      </span>
    </div>
  )
}

export default CurrentForecast;