import React from "react";
import styles from "./DailyForecastCard.module.scss";
import { DailyWeatherCard } from "../../store/features/weather/types";

type Props = DailyWeatherCard;

function DailyForecastCard(props: Props): JSX.Element {

  const { date, min, max, weatherCode } = props; 

  const image = weatherCode % 2 === 0 ? 'rain.png' : 'sun.png';

  return (
    <div className={styles.daily_forecast_card}>
      <p> { date } </p>
      <img src={`/${image}`} alt="Weather icon" />
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
