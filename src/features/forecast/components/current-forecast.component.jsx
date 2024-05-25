// Utilities
import { getTrimmedConditionIcon } from "../../../lib/utilities/image.utils";

// Contexts
import { useContext } from "react";
import { ForecastContext } from "../../../contexts/forecast.context";

const CurrentForecast = () => {
  const { forecast } = useContext(ForecastContext);
  const { current } = forecast;

  const conditionIcon = getTrimmedConditionIcon(current?.condition?.icon)
  return (
    <div>
      Current Forecast
      <img src={conditionIcon} /> alt={current?.condition?.text}
    </div>
  )
}

export default CurrentForecast;