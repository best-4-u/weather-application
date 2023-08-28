import React from "react";
import styles from "./DailyForecastCard.module.scss";
import { DailyWeatherCard } from "../../store/features/weather/types";

type Props = DailyWeatherCard;

function DailyForecastCard(props: Props): JSX.Element {

  const { date, min, max, weatherCode } = props; 

  return (
    <div className={styles.daily_forecast_card}>
      <p> { date } </p>
      <img src={`/${weatherCode}}`} alt="Weather icon" />
      <div className={styles.temp_footer}>
        <div>
          <p> min temp: <span> { min } &#8451;</span> </p>
        </div>
        <div>
          <p> max temp: <span> { max } &#8451;</span> </p>
        </div>
      </div>
    </div>
  );

}

export default DailyForecastCard;
