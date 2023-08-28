import React, { useMemo } from "react";
import styles from "./LocationForecast.module.scss";
import DailyForecastCard from "../DailyForecastCard";
import { useAppSelector } from "../../store/hooks";
import { DailyWeatherCard, Weather } from "../../store/features/weather/types";

function LocationForecast() {

  const weather: Weather | null = useAppSelector((state) => state.weather.currentWeather);

  const cards = useMemo( () => {
    const res: DailyWeatherCard[] = [];
    if (weather === null) {
      return [];
    }

    for (let i = 0; i < 5; i++) {
      res.push({
        min: weather.daily.temperature_2m_min[i],
        max: weather.daily.temperature_2m_max[i],
        date: weather.daily.time[i],
        weatherCode: weather.daily.weathercode[i]
      });
    }

    return res;
  }, [weather]);

  return (
    <div className={styles.location_forecast}>
      <div className={styles.location_header}>
        <h3> London (UK) </h3>
        <button type="button"> Add to favourites </button>
      </div>
      <div className={styles.coordinates}>
        <p> Latitude: <span> 43.12</span>, Longitude <span> 76.512 </span> </p>
      </div>
      <div className={styles.cards_container}>
        {
          cards.map((card) => (
            <DailyForecastCard
              key={card.date}
              date={card.date}
              min={card.min}
              max={card.max}
              weatherCode={card.weatherCode}
            />
          ))
        }
      </div>
    </div>
  );
}

export default LocationForecast;
